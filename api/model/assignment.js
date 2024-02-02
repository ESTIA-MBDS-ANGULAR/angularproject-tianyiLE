let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//cours page 232
var aggregatePaginate = require("mongoose-aggregate-paginate-v2")
let AssignmentSchema = Schema({ 
    id: Number,
    dateDeRendu: Date,
    nom: String,
    rendu: Boolean
});

//cours page 232
AssignmentSchema.plugin(aggregatePaginate)

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('Assignment', AssignmentSchema);
