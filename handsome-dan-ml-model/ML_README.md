```scrapedawg.py``` is not needed to run the application, but was rather used to scrape images from @handsomedanyale on instagram for model training and validation.

Create and activate a conda environment with relevant packages before running ```predict.py```. The pretrained model weights are in ```handsome_dan_detector_model.pth```.

To run the Google Colab:
create a folder in your google drive called data
data should have /data/training/ and /data/validation/
each of these should have a folder for handsomedanpics and nondanpics
every photo in handsomedanpics should have a bounding box around handsome dan and a corresponding xml file
every photo of a dog in nondanpics should have a bounding box around the dan and a corresponding xml file --> done by Stanford dogs dataset on Kaggle

Ask Aniketh for the data folder.
