let data = [],
    str = JSON.parse(window.sessionStorage.getItem("getData"))

if (str !== null)
    data = str

document.getElementById('tBody').innerHTML = ""

for (const i of data)
    document.getElementById('tBody').innerHTML += `<tr><td>${i.name}</td><td>${i.skill}</td><td>${i.level}</td></tr>`

function submit() {
    const name = document.getElementById('newForm').elements[0],
          skill = document.getElementById('newForm').elements[1],
          level = document.getElementById('newForm').elements[2]

    let instance = {
        name: name.value,
        skill: skill.value,
        level: level.value,
    };

    data.push(instance)
    window.sessionStorage.setItem("getData", JSON.stringify(data))

    document.getElementById('tBody').innerHTML = ""

    for (const i of data)
        document.getElementById('tBody').innerHTML += `<tr><td>${i.name}</td><td>${i.skill}</td><td>${i.level}</td></tr>`
}