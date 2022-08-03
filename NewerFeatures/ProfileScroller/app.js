const data = [
    {
        name: 'Rafael Saraiva',
        age: 22,
        gender: 'male',
        lookingfor: 'female',
        location: 'Porto Alegre, RS',
        image: 'https://randomuser.me/api/portraits/men/82.jpg'
    },
    {
        name: 'Roberta Almeida',
        age: 21,
        gender: 'female',
        lookingfor: 'male',
        location: 'Porto Alegre, RS',
        image: 'https://randomuser.me/api/portraits/women/82.jpg'
    },
    {
        name: 'Eduardo Rosa',
        age: 24,
        gender: 'male',
        lookingfor: 'female',
        location: 'Canoas, RS',
        image: 'https://randomuser.me/api/portraits/men/81.jpg'
    },
]

const profiles = profileIterator(data);

//Next btn Event
document.getElementById('next').addEventListener('click', nextProfile);

//Call first Profile
nextProfile();

//Next Profile Display
function nextProfile() {
    const currentProfile = profiles.next().value;

    if(currentProfile !== undefined){
    document.getElementById('profileDisplay').innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">Name: ${currentProfile.name}</li>
            <li class="list-group-item">Age: ${currentProfile.age}</li>
            <li class="list-group-item">Location: ${currentProfile.location}</li>
            <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
        </ul>
    `;

    document.getElementById('imageDisplay').innerHTML = `
    <img src="${currentProfile.image}">`;
    } else {
        window.location.reload();
    }
}

//Profile Iterator
function profileIterator(profiles) {
    let nextIndex = 0;

    return {
        next: function() {
            return nextIndex < profiles.length ?
            { value: profiles[nextIndex++], done: false} :
            { done: true}
        }
    };
}