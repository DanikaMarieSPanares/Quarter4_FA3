function ValidNum() {
    let num;
    do {
      num = prompt("Please enter a number:");
    } while (isNaN(num) || num.trim() === "");
    return parseInt(num, 10);
  }

  function genShape(n) {
    let result = "Number inputted: " + n + "\n\n";
    if (n % 2 !== 0) {
      for (let i = n; i >= 1; i--) {
        result += (i + " ").repeat(n).trim() + "\n";
      }
    } else {
      for (let i = n; i >= 1; i--) {
        result += (i + " ").repeat(i).trim() + "\n";
      }
    }
    document.getElementById("output").textContent = result;
  }

  const num = ValidNum();
  genShape(num);

  let contacts = [];

  function displayCon() {
    document.getElementById("conOutput").textContent = "Contacts: " + contacts.join(", ");
  }

  function addCon() {
    const name = document.getElementById("name").value.trim();
    if (name) {
      if (contacts.length === 7) {
        contacts.shift();
      }
      contacts.push(name);
      displayCon();
      document.getElementById("name").value = "";
    }
  }

  function removeCon() {
    if (contacts.length > 0) {
      contacts.pop();
      displayCon();
    }
  }