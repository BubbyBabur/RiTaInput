
const change = () => {

    /**
     * @type {string}
     */
    let content = document.getElementById("input").value;

    content = [...content].filter(letter => `abcdefghijklmnopqrstuvwxyz,.?!;:"' `.includes(letter.toLowerCase())).join('');

    /**
     * @type {{phones:string, pos:string, stresses:string, syllables:string, tokens:string}}
     */
    let analysis = RiTa.analyze(content);

    console.log(analysis);

    let poses = analysis.pos.split(' ');
    // let phones = analysis.phones.split(' ');
    let syllables = analysis.syllables.split(' ');
    let stresses = analysis.stresses.split(' ');
    let endstr = "";

    let words = analysis.tokens.split(' ');

    for(let i = 0; i < words.length; i++) {
        let pos = poses[i];

        let sum = 0;
        for(let j = 0; j < pos.length; j++) {
            sum += (pos.charCodeAt(j) % 10 + 5) * Math.sin(j+1) * 90;
        }

        const hassyllables = stresses[i].startsWith("0") || stresses[i].startsWith("1");

        let stress = stresses[i].split('/');
        let newsyl = "";
        if(hassyllables) {
            newsyl = syllables[i].split('/').map((a, i) => {
                if(stress[i] === "0") {
                    return a
                } else {
                    return `<strong>${a}</strong>`
                }
            })
        }

        endstr += (
            `<div class="word-container">
                <div class="word" style="background-color:hsla(${sum},100%,50%,0.6)">${words[i]}</div>
                <div class="word-content" style="background-color:hsla(${sum},90%,90%,1.0)">
                    <strong>${posmap.get(pos)}</strong>
                    ${!hassyllables ? `` : 
                    `
                    <br>
                    <i>${newsyl.join('/')}</i>
                    `}
                </div>
            </div>`)

        if(i !== words.length - 1) { 
            endstr += ' ';
        }
        
    }

    document.getElementById("output").innerHTML = endstr;

};

change();

document.getElementById("input").addEventListener("input", change)