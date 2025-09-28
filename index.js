let random_number;
var difficulty_level_value ;



function set_difficulty_level(level_value) {
    event.preventDefault()
    difficulty_level_value = level_value;
    console.log("YOU HAVE SELECTED DIFFICULTY LEVEL !!", difficulty_level_value);

    random_number = (Math.random(0, 99))
    random_number = parseInt(random_number * 100)
    console.log("Random Number: ",
        random_number)


}

function checkNumber() {
    event.preventDefault()
    const inputField = document.getElementById("input-number")
    const user_number = parseInt(document.getElementById("input-number").value);
    console.log("Uper Check rand number: ", random_number);
    console.log("Diffi levl", difficulty_level_value)
    console.log("user_number: ",user_number);
    

    if(difficulty_level_value > 0) {
        console.log("Check rand number: ", random_number);


        if (user_number == random_number) {
            document.getElementById("result-span").innerText = "WON!";
            inputField.value = '';
        }
        else if (user_number > random_number) {
            document.getElementById("result-span").innerText = "Entered Number is HIGH!!";
            inputField.value = '';
        } else {
            document.getElementById("result-span").innerText = "Enetered Number is low !!";
            inputField.value = '';
        }

        difficulty_level_value--;
        console.log("You Have Only", difficulty_level_value, "Chance to left");
    }

}

