$(document).ready(function() {
    var contactOptions = [
        {
            title: "New Customer Inquiries",
            image: "images/icon-buttons/question.svg", 
            link: "#new-customer"
        },
        {
            title: "Contact Party Coordinator",
            image: "images/icon-buttons/party-coordinator-form.svg",  
            link: "#party-coordinator"
        },
        {
            title: "Voice a Concern",
            image: "images/icon-buttons/concern.svg",  
            link: "#voice-concern"
        },
        {
            title: "Pool Rental",
            image: "images/icon-buttons/swimming-pool.svg", 
            link: "#pool-rental"
        },
        {
            title: "Give a Suggestion",
            image: "images/icon-buttons/suggestion.svg", 
            link: "#give-suggestion"
        },
        {
            title: "Share a Compliment",
            image: "images/icon-buttons/compliment.svg",  
            link: "#share-compliment"
        },
        {
            title: "Water Safety Presentation Inquiry",
            image: "images/icon-buttons/form.svg",  
            link: "#water-safety"
        },
        {
            title: "Parent & Me Lesson Interest",
            image: "images/icon-buttons/baby.svg", 
            link: "#parent-lesson"
        }
    ];

    var contactHtml = '';
    contactOptions.forEach(function(option) {
        contactHtml += `
            <div class="icon-card">
                <img src="${option.image}" alt="${option.title}">
                <a href="${option.link}">${option.title}</a>
            </div>
        `;
    });

    $('#contactIcons').html(contactHtml);
});
