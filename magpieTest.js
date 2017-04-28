var amount = 0;
var description = "Magpie Test";

Magpie.configure({
    // The publishable key from the Magpie dashboard
    key: "pk_test_KEYHERE",
    // The name of the store -- appears on the checkout page
    name: "Dom Test",
    // The description of the product or service being purchased
    description: description,
    // An amount, usually default value, to charge
    amount: 0,
    // The currency
    currency: 'php',
    // The URL where Checkout will fetch your logo
    image: "https://s3-us-west-2.amazonaws.com/client-objects/dom_profile.png",
}, function(err, token) {
    $("#overlay").show();
    // AJAX stuff, check out jQuery AJAX doc
    $.ajax({
        // How data is sent
        type: "POST",
        // Program that will send process charge
        url: "/charge.php",
        // Fields
        data: {
            'token': token.id,
            'amount': amount,
            'description': description
        },
        dataType: "json",
        success: function (data) {
            console.log(data);
            window.location.href = "/thanks.html";
        },
        error: function(e) {
            console.log(e);
            window.alert("Error: " + e);
        },
        complete: function() {
            $("#overlay").hide();
        }
    });
});


$("#standard").on("click", function(e) {
    e.preventDefault();
    amount = 499;
    description = 'Basic Plan';
    Magpie.open({
        'amount': amount,
        'description': description
    });
})

$("#business").on("click", function(e) {
    e.preventDefault();
    amount = 999;
    description = 'Standard Plan';
    Magpie.open({
        'amount': amount,
        'description': description
    });
})

$("#premium").on("click", function(e) {
    e.preventDefault();
    amount = 1499;
    description = 'Premium Plan'
    Magpie.open({
        'amount': amount,
        'description': description
    });
})

$("#ultimate").on("click", function(e) {
    e.preventDefault();
    amount = 1999;
    description = 'Ultimate Plan';
    Magpie.open({
        'amount': amount,
        'description': description
    });
})
