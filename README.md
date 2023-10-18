# Timeline Plugin for Editor.js

### Intro

A plugin for Editor.js that allows you to add timelines in your content.

The design of the timeline is basic and carries it's own styling.  In its current state, each "node" of the timeline has the following data points: 

- Title
- Subtitle (can be used for date/timestamp)
- Content
- Theme

Adding consecutive nodes seamlessly merges them into the same timeline if the same theme has been applied to them. 

*A demo is available [here](https://shahrozn.github.io/editorjs-timeline/).*

### Limitations

- Position of the cards doesn't work. Using the left position causes alignment issue possibly due to the restricted width of the editor itself. Styling has been readjusted slightly to allow the "right" position to be properly left aligned.
- Content doesn't have inline tools for text formatting.
- No color adjustments outside of the basic light and dark themes.
- Data validation not being done.

### Data Structure

Upon saving, the folowing data structure is produced. 

```
{
    "time": 1697636961469,
    "blocks": [
        {
            "id": "Uhd2gNg8UM",
            "type": "text",
            "data": {
                "title": "Timeline Node Title",
                "subtitle": "Timeline Node Subtitle",
                "body": "Timeline Node Content",
                "position": "right",
                "theme": "light"
            }
        }
    ],
    "version": "2.28.2"
}
```
