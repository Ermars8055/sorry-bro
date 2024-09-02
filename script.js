document.getElementById('apologizeButton').addEventListener('click', function() {
    const apologizeButton = document.getElementById('apologizeButton');
    const apologyContainer = document.getElementById('apologyContainer');
    const callButton = document.getElementById('callButton');
    
    apologizeButton.style.display = 'none';
    apologyContainer.style.display = 'block';
    
    setTimeout(function() {
        callButton.style.display = 'inline-block';
    }, 5000); // Show the "Call Me" button after 10 seconds
});

document.getElementById('callButton').addEventListener('click', function() {
    const apologyContainer = document.getElementById('apologyContainer');
    const callContainer = document.getElementById('callContainer');
    
    apologyContainer.style.display = 'none'; // Hide the apology image
    callContainer.style.display = 'block'; // Show the call image and text
});