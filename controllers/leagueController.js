const express = require('express');
const router = express.Router();
const League = require('/models/League'); 

//Post request to add a new league

exports.getCreateLeague = (req,res) => {
    if(req.user){
        res.render('create-league.html', {
            title: 'Create League',
        });
    }else {
        res.redirect('/login'); //Redirects to login if not authenticated
    }
};

//Handles the creation of the new league

exports.postCreateLeague = (req,res) => {
    const {leagueName, sport, startDate, endDate} = req.body;

    const newLeague = new League({
        leagueName,
        sport,
        startDate,
        endDate,
    });

    newLeague.save((err) => {
        //Handles any errors (validation errors or database errors)
        if(err){
            console.error(err);
            req.flash('error', {msg:'Error adding new league'});
            res.redirect('/admin-dash'); //Redirects to admin dash to try again
        }else {
            req.flash('success', {msg: 'League created successfully'});
            res.redirect('/admin-dash');
        }
    })
}


