function mySuccessAlert(message) {
    const successDiv = document.createElement('div');
successDiv.classList.add('cadre'); 

successDiv.innerHTML = `
<div class="class">
<span> ✔️</span>
<span>${message}</span>
</div>
`;

const container = document.getElementById('success-div');
container.appendChild(successDiv);

successDiv.style.display = 'block';

setTimeout(() => {
successDiv.style.display = "none";
}, 4000); 

}



function myInfoAlert(message){
const infoDiv = document.createElement('div');
infoDiv.classList.add('cadre2'); 

infoDiv.innerHTML = `
<div class="class">
<span> ℹ️ </span>
<span>${message}</span>
</div>

`;

const container = document.getElementById('info-div');
container.appendChild(infoDiv);
infoDiv.style.display = 'block';
setTimeout(() => {
infoDiv.style.display = "none";
}, 4000);
}



function myWarningAlert(message){
const warningDiv = document.createElement('div');
warningDiv.classList.add('cadre3'); 

warningDiv.innerHTML = `
<div class="class">
<span> ⚠️</span>
<span>${message}</span>
</div>

`;

const container = document.getElementById('warning-div');
container.appendChild(warningDiv);
warningDiv.style.display = 'block';
setTimeout(() => {
warningDiv.style.display = "none";
}, 4000);
}



function myDangerAlert(message){
const dangerDiv = document.createElement('div');
dangerDiv.classList.add('cadre4'); 

dangerDiv.innerHTML = `
<div class="class">
<span> ❌</span>
<span>${message}</span>
</div>

`;

const container = document.getElementById('danger-div');
container.appendChild(dangerDiv);
dangerDiv.style.display = 'block';
setTimeout(() => {
dangerDiv.style.display = "none";
}, 4000);
}
myInfoAlert("Info:")
mySuccessAlert("bravo vous avez reussi !")
myWarningAlert("Warning")
myDangerAlert("Attention")