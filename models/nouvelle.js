const Model = require('./model');
module.exports =
    class Nouvelle extends Model{
        constructor(id, category, title, text, imageUrl, date) {
            super();
            this.Id = id !== undefined ? id :"";
            this.Category = category !== undefined ? category : "";
            this.Title = title !== undefined ? title : "";
            this.Text = text !== undefined ? text : "";
            this.ImageUrl = imageUrl !== undefined ? imageUrl : "";
            this.Date = date !== undefined ? date : "";

            this.setKey("Id")
            this.addValidator('Category','string');
            this.addValidator('Title', 'string');
            this.addValidator('ImageUrl', 'url');
            this.addValidator('Date','date');
        }
    }