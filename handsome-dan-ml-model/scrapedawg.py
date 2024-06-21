from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from webdriver_manager.chrome import ChromeDriverManager
import os
import wget
import requests
import time

# move into handsomedanpics folder
def download_images(image_urls, folder="handsomedanpics"):
    if not os.path.exists(folder):
        os.makedirs(folder)
    
    for idx, url in enumerate(image_urls):
        response = requests.get(url)
        with open(f"{folder}/image_{idx + 1}.jpg", "wb") as file:
            file.write(response.content)

# initialize the Chrome driver
driver = webdriver.Chrome()
driver.get("https://www.instagram.com")


# locate the username input field
try:
    username_input = WebDriverWait(driver, 50).until(EC.element_to_be_clickable((By.NAME, "username")))
    print("Username input field found.")
except Exception as e:
    print("Username input field not found:", e)
    driver.quit()

# locate the password input field
try:
    password_input = WebDriverWait(driver, 50).until(EC.element_to_be_clickable((By.NAME, "password")))
    print("Password input field found.")
except Exception as e:
    print("Password input field not found:", e)
    driver.quit()

# enter your username and password
username_input.send_keys("Put your username here")
password_input.send_keys("Put your password here")

# submit login info
password_input.send_keys(Keys.RETURN)

# wait to load 
time.sleep(30)

driver.get("https://www.instagram.com/handsomedanyale/")

time.sleep(40)

#scroll down to scrape more images
driver.execute_script("window.scrollTo(0, 4000);")

# locate the "Show more posts from handsomedanyale" span element and click it
try:
    show_more_posts_span = WebDriverWait(driver, 50).until(EC.presence_of_element_located((By.XPATH, "//span[contains(@class, 'x1lliihq') and contains(text(), 'Show more posts from handsomedanyale')]")))
    driver.execute_script("arguments[0].click();", show_more_posts_span)
    print("Clicked 'Show more posts from handsomedanyale' span.")
except Exception as e:
    print("The 'Show more posts from handsomedanyale' span was not found or could not be clicked:", e)

time.sleep(30)

image_urls = set()
num_images_to_download = 460

while len(image_urls) < num_images_to_download:
    # scroll down to load more images
    driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
    time.sleep(2)  # wait for new images to load

    # extract image URLs
    images = driver.find_elements(By.XPATH, "//div[contains(@class, '_aagv')]//img")
    for img in images:
        url = img.get_attribute("src")
        if url not in image_urls:
            image_urls.add(url)
    
    print(f"Collected {len(image_urls)} image URLs so far...")

    # break the loop if we've collected enough URLs
    if len(image_urls) >= num_images_to_download:
        break
print("done")
# download the images
download_images(list(image_urls)[:num_images_to_download])