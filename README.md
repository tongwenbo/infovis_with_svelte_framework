# information visualization with svelte framework

## Svelte
website: https://svelte.dev/ <br/>
Svelte is a fairly new web framework for front-end developers like vue, react and angular. It has many advantages,
especially with interactions among graphs. The event handling of svelte is very easy and efficient.

## data pre-processing
The original data are all in ./src/assets/data.js, including the additional data I added. The source is commented.
For data to be adapted for the input of visualization. ./data-process.py is used. Because this assignment is not focused on Python, I did not make it perfect enough to be run automatically. This is a half-automated script.
The data after processing is stored respectively in the json files under ./src/assets/. The data for piechart is written directly in the script for ease of use.

## ploting
The svelte scripts for ploting are stored unter ./src/lib/. 
### why plot lollipop twice?
I am preparing this data visualization as if I am presenting it in a speech. So, I arrange the plots according to the logic (see the detailed story below) of speech which I am about to give. If it is just for looking, I will plot it only once.

## app interface
App and Layout under ./src/ are the interface to the local webpage. You can run it in Chrome or Edge, preferably in the newest edition.

## how to run this project
1. After git clone, you should be in main folder. 
2. Execute in the terminal: `npm install`.
3. Execute in the terminal: `npm run dev`.
4. Ctrl click the link in the terminal, you should see the website.
5. Ctrl+C to end the terminal.

## Detailed Story:
Firstly, I would show the accident number of different road types. This is somewhat a warm-up presentation to get the audience familiar to the German roads, because they do not all come from Germany. Plus, given the irregularity of the spread, it is also a proof that road type is not a decisive factor of fatality. 
Secondly, I use my additional data to tell the most dangerous errors in accidents. This plot is a foreshadowing of the story and I will use it again.
Then, I will show them the death number in all the states according to type of area. It is clear from the graph that out of town is the most dangerous area. 
After that, two pie charts are shown to illustrate that although only 25% of the accidents related to human injury happens in out of town, it contributes 60% of the death. Until now, I should have left the audience deep impression of how lethal is driving in the area of out-of-town. 
Finally, I reshow my second plot and re-explain it with the conclusion I have before. It is obvious that the top 3 causes of accident are more fatal in out of town areas (because of road condition and speed). I will relate it to the theoretical test of the German driving license during the presentation. In the test, priority questions always worth highest scores and are more emphasized during training. Priority is important, however, it is not that lethal and it happens mostly in innercity. According to my analysis of the data, it is out of city areas that should drive our concern. Thus, I will give a suggestion that if we want to reduce the mortality, we could emphasize more on the questions that are most fatal (e.g. Incorrect road use) in out of city areas in the theoretical test.
