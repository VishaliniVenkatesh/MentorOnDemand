$(document).ready(function() {
    $('div#SearchMentor').show();
    $('div#manageskillscontent').hide();
    $('div#editpaymentcontent').hide();
    $('div#addtable').hide();
    $('div#manageuserContent').hide();
    $('div#manageMentorContent').hide();

    $('a#manage-skills').click(function() {
        $('div#manageskillscontent').show();
        $('div#SearchMentor').hide();
        $('div#editpaymentcontent').hide();
        $('div#addtable').hide();
        $('div#manageuserContent').hide();
        $('div#manageMentorContent').hide();
        return false;
    });


    $('a#Editpp').click(function() {
        $('div#editpaymentcontent').show();
        $('div#SearchMentor').hide();
        $('div#manageskillscontent').hide();
        $('div#addtable').hide();
        $('div#manageuserContent').hide();
        $('div#manageMentorContent').hide();
        return false;
    });

    $('#add').click(function() {
        $('div#addtable').show();
        $('div#editpaymentcontent').hide();
        $('div#SearchMentor').hide();
        $('div#manageskillscontent').hide();
        $('div#manageuserContent').hide();
        $('div#manageMentorContent').hide();
        return false;
    });

    $('a#Manage-User').click(function() {
        $('div#manageuserContent').show();
        $('div#manageskillscontent').hide();
        $('div#SearchMentor').hide();
        $('div#editpaymentcontent').hide();
        $('div#addtable').hide();
        $('div#manageMentorContent').hide();
        return false;
    });

    $('a#Manage-Mentor').click(function() {
        $('div#manageMentorContent').show();
        $('div#manageuserContent').hide();
        $('div#manageskillscontent').hide();
        $('div#SearchMentor').hide();
        $('div#editpaymentcontent').hide();
        $('div#addtable').hide();
        return false;
    });
});