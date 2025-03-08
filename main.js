const toggle = document.querySelector(".toggle");

toggle.addEventListener("change", function () {
  document.body.classList.toggle("dark-mode");
});


function addItem() {
    let newItemText = document.getElementById("newItem").value.trim();

    if (newItemText) {
        let list = document.getElementById("list");

        // Create new list item
        let li = document.createElement("li");
        li.style.display = "flex";
        li.style.gap = "10px";
        li.style.marginLeft = "50px";
        li.style.fontSize = "2rem";
        li.style.alignItems = "center";

        // Create checkbox
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("checkbox");
        checkbox.style.width = "30px";
        checkbox.style.height = "30px";
        checkbox.style.cursor = "pointer";

        // Append checkbox and text inside li
        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(newItemText));

        // Append li to the list
        list.appendChild(li);

        // Clear input field after adding
        document.getElementById("newItem").value = "";
    } else {
        alert("Please enter a goal!");
    }
}
function bucket(){
    document.getElementById("add").scrollIntoView({ behavior: "smooth" });
}