Moments = new Mongo.Collection('moments');

Moments.attachSchema(new SimpleSchema({
  time: {
    type: Date,
    label: 'Time'
  },
  description: {
    type: String,
    label: 'Description'
  },
  title: {
      type: String,
      label: 'Title'
  },
  createdAt: {
    type: Date,
    label: 'Created At',
    autoValue() {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date()};
      } else {
        this.unset();
      }
    }
  }
}));
