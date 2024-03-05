let references = [{
    name: 'Chiyoko',
    reference: "Sergio did an amazing job!!! He was absolutely punctual, friendly and kind, energetic, and left my apartment not only sparkling clean, but also tidier than before. Absolutely highly recommended! Great work, thank you Sergio! Don't hesitate to book a request with him!"
},
{
    name: 'Torsten',
    reference: "Es war alles perfekt. Sehr sorgfältige Reinigung."
},
{
    name: 'Aymen',
    reference: "Sergio is probably the best &amp; most professional helper on this platform. His attention to detail &amp; punctuality greatly complements his friendly attitude. I can highly recommend working with Sergio."
},
{
    name: 'Byrke',
    reference: "Very nice and friendly person. He took great care of my belongings and I am very happy with the outcome. Thank you!"
},
{
    name: 'Manuel',
    reference: "We are very happy with Sergio. He comes on time and does a very good Job!"
},
{
    name: 'Kathrin',
    reference: "Ja, ich war sehr zufrieden. Alles nach den Vorstellungen geputzt und genau in der vorgegebenen Zeit fertig geworden. Kommunikation auf Englisch lief problemlos. Ich würde ihn jederzeit wieder buchen. "
},
{
    name: 'Angela',
    reference: "Great experience! Helped me a lot and clean well with professionalism! I’ll book him again!"
},
{
    name: 'Anna',
    reference: "Very punctual, clean and sympathetic!"
},
{
    name: 'Tania',
    reference: "Sergio cleaned thoroughly. He has a very good attitude and  left everything very clean. "
},
{
    name: 'Nina',
    reference: "Sergio ist super freundlich und angenehm im Umgang und seine Arbeit war wirklich ganz hervorragend! "
},
{
    name: 'Johanna',
    reference: "Super freundlich, sehr schnell und gründlich! Bin sehr zufriedden :-)"
},
{
    name: 'Louise',
    reference: "Super nett, sehr zuverlässig und gute Reinigung!"
}]

let button = document.getElementById('loadMoreRefs');







let shownPairs = new Set();


function updateReferences() { 
    
    let ref1Name = document.getElementById('ref1Name');
    let ref1Content = document.getElementById('ref1Content');
    let ref2Name = document.getElementById('ref2Name');
    let ref2Content = document.getElementById('ref2Content');
    
    const getTwoNums = () => {
        let rNum1 = Math.floor(Math.random() * references.length);
        let rNum2 = Math.floor(Math.random() * references.length);
        while (rNum2 === rNum1 || shownPairs.has(`${rNum1}, ${rNum2}`)) {
            rNum2 = Math.floor(Math.random() * references.length);
        }
        return [rNum1, rNum2];
    }
    
    
    if (shownPairs.size === references.length * (references.length -1)) {
        shownPairs.clear();
    }
    
    let randomNumbers = getTwoNums();
    let randomNum1 = randomNumbers[0];
    let randomNum2 = randomNumbers[1];

    shownPairs.add(`${randomNum1}, ${randomNum2}`);
    

    
    ref1Name.innerHTML = references[randomNum1].name;
    ref1Content.innerHTML = references[randomNum1].reference;
    ref2Name.innerHTML = references[randomNum2].name;
    ref2Content.innerHTML = references[randomNum2].reference;
    
}

button.addEventListener('click', updateReferences);