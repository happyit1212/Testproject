const answers = document.querySelectorAll('.answer');
const arrowIcons = document.querySelectorAll('.question img');
const container = document.querySelector('.container');

answers.forEach(answer => (answer.style.display = 'none'));

container.addEventListener('click', e => {
    arrowIcons.forEach(arrow => {
        if (e.target === arrow) {
            answers.forEach(answer => {
                if (answer.parentElement === e.target.parentElement.parentElement) {
                    if (answer.style.display === 'none') {
                        arrow.style.transform = 'rotate(180deg)';
                        answer.style.display = 'block';
                        e.target.parentElement.style.color = 'crimson';
                    } else if (answer.style.display === 'block') {
                        arrow.style.transform = 'rotate(0)';
                        answer.style.display = 'none';
                        e.target.parentElement.style.color = 'blueviolet';
                    }
                }
            });
        }
    });
});


$(document).ready(function () {
    // Get the input element by its ID
    const inputField = $('#keywords');

    // Add an event listener to the input field for real-time detection
    inputField.on('input', function () {
        // Get the current value of the input field
        const inputValue = $(this).val();
        console.log(inputValue);
        // Check if the input value exists (is not empty)
        if (inputValue) {
            // Send the data to the server using jQuery's ajax method
            $.ajax({
                url: 'http://localhost:3000/submit-keywords',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({ inputValue: inputValue }),
                success: function (response) {
                    if (response.message === 'Matching row found') {

                        $('#banner').remove();
                        $('#first-remove').remove();
                        $('#second-remove').remove();

                        const rowData = response.data;
                        console.log('Matching Row Data:', rowData);

                        const newContentHtml = `
                         <p class="section-title">Search Result</p>
        <div class="section-content">
            <img src="./Assets/1.png" width="37%" />
            <div class="text-content">
                <p class="content-title" id="title">${rowData.Title}</p>
                <p class="content-undertext" id="author">${rowData.Author}</p>
                <div class="content-list">
                    <div class="Edition">
                        <p>Edition: </p>
                        <p class="style-color" id="isbn13">${rowData.Edition || 'N/A'}</p>
                    </div>
                    <div class="Edition">
                        <p>Price: </p>
                        <p class="style-color" id="price">$${rowData.Price}</p>
                    </div>
                    <div class="Edition">
                        <p>ISBN: </p>
                        <p class="style-color" id="deition">${rowData['ISBN_13']}</p>
                    </div>
                    <div class="Edition">
                        <p>Publication Year: </p>
                        <p class="style-color" id="publicationYear">${rowData.Publication_year}</p>
                    </div>
                    <div class="Edition">
                        <p>Publisher: </p>
                        <p class="style-color" id="publisher">${rowData.Publisher}</p>
                    </div>
                </div>
            </div>
                    `;

                        $('#newContent').html(newContentHtml).show();

                    } else {
                        console.log("No matching title found");
                    }
                },
                error: function (error) {
                    console.error('Error:', error);
                }
            });
        }
    });
});
