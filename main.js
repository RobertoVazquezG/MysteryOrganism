// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

/* Since you need to create multiple objects, create a factory function pAequorFactory() that has two parameters:

The first parameter is a number (no two organisms should have the same number).
The second parameter is an array of 15 DNA bases.
pAequorFactory() should return an object that contains the properties specimenNum and dna that correspond to the parameters provided.

You’ll also add more methods to this returned object in the later steps.*/

const pAequorFactory = (number, arrayDNA) => {
  return {
    specimenNum: number,
    dna: arrayDNA,
    mutate() {
      //1. Crear un número random del 0 al 14 (tamaño del array)
      randomNum = Math.floor(Math.random() * 14);
     // console.log(`randomNum = ${randomNum}`);
      //2. Seleccionar el indice en el array de acuerdo al número random anterior
      base = this.dna[randomNum];
     // console.log(`base = ${base}`);
      //3. Cambiar de base a una base diferente, no se puede repetir
      returnBase = returnRandBase();
    //  console.log(`returnBase = ${returnBase}`);
      while (base === returnBase){
        returnBase = returnRandBase();
      //  console.log(`returnBase = ${returnBase}`);
      }
     // this.dna[randomNum] = returnBase;
      this.dna.splice(randomNum, 1, returnBase);
     // console.log(`nuevo dna = ${this.dna}`);
    },
    compareDNA(pAequorObject){
      coincidencias = 0;
      for(baseIndex in this.dna){
        if(this.dna[baseIndex] === pAequorObject.dna[baseIndex]){
          coincidencias++;
         // console.log(`coincidencias: ${coincidencias}`);
        }
       // console.log(this.dna)
      }
      coincidencias = (coincidencias * 100)/15;
    //  console.log(`Specimen #${this.specimenNum} and Specimen #${pAequorObject.specimenNum} have ${coincidencias}% DNA in common.`);
    },
    willLikelySurvive(){
      surviveChance = 0;
      this.dna.forEach(element => {
        if(element === 'C' || element === 'G'){
          surviveChance++;
         // console.log(`surviveChance: ${surviveChance}`);
        }
      });
      surviveChance = (surviveChance * 100)/15;
     // console.log(`surviveChance: ${surviveChance}%`);
      if(surviveChance >= 60){
        console.log(`surviveChance: ${surviveChance}%`);
        return true;
      }
      else{
        return false;
      }
    }
  };
}

//Creación de 30 instancias que pueden sobrevivir en su ambiente natural. (surviveChance >= 60)
function instances30() {
  specimens = [];
  j = 1;
  for(i = 0; i < 3; i++){
    specimens[i] = pAequorFactory(j, mockUpStrand());
    while (!specimens[i].willLikelySurvive()){
      specimens[i] = pAequorFactory(j, mockUpStrand());
    }
    j++;
  }
  console.log(specimens);
}

instances30();

/*const specimen1 = pAequorFactory(1, mockUpStrand());
const specimen2 = pAequorFactory(2, mockUpStrand());
console.log(specimen1);
console.log(specimen2);
specimen1.mutate();
console.log(specimen1);
specimen1.compareDNA(specimen2);
console.log(specimen1.willLikelySurvive());

//console.log(pAequorFactory(1, mockUpStrand()));
//console.log(pAequorFactory(2, mockUpStrand()));



//console.log(randomNum = Math.floor(Math.random() * 15));

/*4. Your team wants you to simulate P. aequor‘s high rate of mutation (change in its DNA).

To simulate a mutation, in pAequorFactory()‘s returned object, add the method .mutate().

.mutate() is responsible for randomly selecting a base in the object’s dna property and changing the current base to a different base. 
Then .mutate() will return the object’s dna.

For example, if the randomly selected base is the 1st base and it is 'A', the base must be changed to 'T', 'C', or 'G'. But it cannot be 
'A' again.*/

/* 5. Your research team wants to be able to compare the DNA sequences of different P. aequor. You’ll have to add a new method 
(.compareDNA()) to the returned object of the factory function.

.compareDNA() has one parameter, another pAequor object.

The behavior of .compareDNA() is to compare the current pAequor‘s .dna with the passed in pAequor‘s .dna and compute how many bases are 
identical and in the same locations. .compareDNA() does not return anything, but prints a message that states the percentage of DNA the 
two objects have in common — use the .specimenNum to identify which pAequor objects are being compared. For example:

ex1 = ['A', 'C', 'T', 'G']
ex1 = ['C', 'A', 'T', 'T']

ex1 and ex2 only have the 3rd element in common ('T') and therefore, have 25% (1/4) of their DNA in common. The resulting message would 
read something along the lines of: specimen #1 and specimen #2 have 25% DNA in common.*/

/* 6. P. aequor have a likelier chance of survival if their DNA is made up of at least 60% 'C' or 'G' bases.

In the returned object of pAequorFactory(), add another method .willLikelySurvive().

.willLikelySurvive() returns true if the object’s .dna array contains at least 60% 'C' or 'G' bases. Otherwise, .willLikelySurvive() 
returns false.

7. With the factory function set up, your team requests that you create 30 instances of pAequor that can survive in their natural environment. 
Store these instances in an array for your team to study later.*/









