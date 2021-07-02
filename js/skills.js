let data = [],
    str = JSON.parse(window.sessionStorage.getItem("getData"))

if (str !== null)
    data = str

document.getElementById('tBody').innerHTML = ""

for (const i of data)
    document.getElementById('tBody').innerHTML += `<tr><td>${i.name}</td><td>${i.skill}</td><td>${i.level}</td></tr>`

function submit() {
    const name = document.getElementById('newForm').elements["Name"].value,
          skill = document.getElementById('newForm').elements["Skill"].value,
          level = document.getElementById('newForm').elements["Level"].value

    let instance =
    {
        name: name,
        skill: skill,
        level: level,
    };

    data.push(instance)

    document.getElementById('tBody').innerHTML = ""

    for (const i of data)
        document.getElementById('tBody').innerHTML += `<tr><td>${i.name}</td><td>${i.skill}</td><td>${i.level}</td></tr>`

    window.sessionStorage.setItem("getData", JSON.stringify(data))
}