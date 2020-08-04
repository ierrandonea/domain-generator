    let pronoun = ['the', 'our', 'my'];
    let adj = ['great', 'big', 'small', 'freezing', 'burning'];
    let noun = ['jogger', 'racoon', 'cat', 'lamp', 'wheels', 'code'];
    let extens = ['.com', '.us', '.nz', '.cl'];


    const domainCall = () => {

        for (let i = 0; i < pronoun.length; i++) {
            for (let x = 0; x < adj.length; x++) {
                for (let y = 0; y < noun.length; y++) {
                    for (let z = 0; z < extens.length; z++) {
                        console.log(pronoun[i] + adj[x] + noun[y] + extens[z]);
                    };
                };
            };
        };
    };


    console.log(domainCall());
