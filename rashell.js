class Pokemon {
      constructor(name, hp, attack, defense, abilities, classtext){
              // this.pokephoto= pokephoto;
              this.name = name;
              this.hp = hp;
              this.attack = attack;
              this.defense = defense;
              this.abilities = abilities;
              this.classtext = classtext;
              // what div will be used to store data
              this.container= document.getElementById(name);
              // how I want the information to display onto the page
              this.element = document.createElement("ul");
              this.element.className = ("rashellHell");
    }

    display(){
      console.log("displaying " + this.name);

      let pokemonName = document.createElement('h3');
          pokemonName.innerHTML = this.name;
          this.element.appendChild(pokemonName);
          this.container.appendChild(this.element);
          this.element.className = this.classtext;

      let pokeHp = document.createElement('li');
          pokeHp.innerHTML= "HP: " + this.attack;
          this.element.appendChild(pokeHp);
          this.container.appendChild(this.element);

      let pokemonAttack = document.createElement('li');
          pokemonAttack.innerHTML ="Attack: " + this.attack;
          this.element.appendChild(pokemonAttack);
          this.container.appendChild(this.element);

      let pokemonDefense = document.createElement('li');
          pokemonDefense.innerHTML = "Defense: " + this.defense;
          this.element.appendChild(pokemonDefense);
          this.container.appendChild(this.element);

      let pokemonAbilities = document.createElement('li');
          pokemonAbilities.innerHTML = "Abilities: " + this.abilities;
          this.element.appendChild(pokemonAbilities);
          this.container.appendChild(this.element);


    }

    moreInfo(){
          console.log( "this shouldbe a Button");
      let showMore= document.createElement('button');
          showMore.innerHTML = "More Stats" ;
          this.element.appendChild(showMore);
          this.container.appendChild(this.element);

          show(){

            let newStats = document.createElement('')
          }



    }

  }




// making the API calls for the pokemon information
axios.get('https://fizal.me/pokeapi/api/v2/name/nidorino.json')
      .then(function (response){
              // let pokephoto ="firstPokemon_033_nidorino.png";
              let name = response.data.name;
              let hp = response.data.stats[5].base_stat;
              let attack = response.data.stats[4].base_stat;
              let defense = response.data.stats[3].base_stat;
              let abilities= [];
                for ( let i=0; i<response.data.abilities.length; i++){
                  abilities.push(response.data.abilities[i].ability.name);
                  console.log(response.data.abilities[i]);
                }






              let nidorino = new Pokemon( name, hp, attack, defense, abilities, "ok");
              nidorino.display();
              nidorino.moreInfo();
              console.log(name, hp, attack, defense);


              RashellHell.poke.push(nidorino);
            })

axios.get('https://fizal.me/pokeapi/api/v2/name/steelix.json')
    .then(function (response){
              // let pokephoto ="steelix.png";
              let name = response.data.name;
              let hp = response.data.stats[5].base_stat;
              let attack = response.data.stats[4].base_stat;
              let defense = response.data.stats[3].base_stat;
              let abilities= [];
                for ( let i=0; i<response.data.abilities.length; i++){
                  abilities.push(response.data.abilities[i].ability.name);
                  console.log(response.data.abilities[i]);
                }

                let steelix = new Pokemon( name, hp, attack, defense, abilities, "ok");

                steelix.display();

                  RashellHell.poke.push(steelix);

              console.log(name, hp, attack, defense);
  })

axios.get('https://fizal.me/pokeapi/api/v2/name/totodile.json')
    .then(function (response){

              let name = response.data.name;
              let hp = response.data.stats[5].base_stat;
              let attack = response.data.stats[4].base_stat;
              let defense = response.data.stats[3].base_stat;
              let abilities= [];
                for ( let i=0; i<response.data.abilities.length; i++){
                  abilities.push(response.data.abilities[i].ability.name);
                  console.log(response.data.abilities[i]);
                }

                let totodile = new Pokemon(name, hp, attack, defense, abilities, "ok");
                totodile.display();

                  RashellHell.poke.push(totodile);

              console.log(name, hp, attack, defense);
    })



    class Trainer{
      constructor(name, height, adress, classtext){
        this.name = name;
        this.height = height;
        this.adress = adress;
        this.classtext= classtext;
        this.container = document.getElementById("trainer");
        this.element = document.createElement("ol");
        this.container.appendChild(this.element);
        this.list1 = document.createElement('h1');
        this.list2 = document.createElement('li');
        this.list3 =document.createElement('li');
        this.poke = [];

    }

    all(){
        return this.poke;
    }

    get(name){
      for(let r=0; r < this.poke.length; r++){
          if(name === this.poke[r].name){
            return this.poke[r];4
          }
      }
    }

    execute(){
      let name= this.name;
      this.element.appendChild(this.list1);
      let breaker1 = this.list1;
      breaker1.innerHTML = this.name;

       let height=this.height;
       this.element.appendChild(this.list2);
       let breaker2 = this.list2;
       breaker2.innerHTML = this.height;

      let adress= this.adress;
      this.element.appendChild(this.list3);
      let breaker3 = this.list3;
      breaker3.innerHTML = this.adress;

      let classtext= this.classtext;
      this.element.className =  classtext;

    }
  }

            let name;
            let height;
            let adress;
            let classtext;
            let breaker1;
            let breaker2;
            let breaker3;

        let RashellHell= new Trainer("RashellHell", "5'5''", "123 Seasme Street NY", "ok" );


RashellHell.execute();
