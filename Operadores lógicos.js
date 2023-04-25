/*
------ ======Operadores lógicos====== ------

&&   --->   Filho Obediente
          && = E    ----> (TODOS ITENS TEM QUE ESTAR VERDADEIRO)
    true  && true  = true    --->   pode e pode ou sim sim (TODOS ITENS TEM QUE ESTAR VERDADEIRO)
    true  && false = false   --->   pode e não pode  ou sim e não
    false && false = false   --->   Não e Não ou Não pode e Não pode
*/
console.log(true && true) // pode e pode ou sim sim
console.log(true && false) // pode e não pode  ou sim e não
console.log(false && false) // Não e Não ou Não pode e Não pode

/*    
----------------------------------------------------------------------------------------
||   --->   Filho Espertinho
          || = OU    ----> (1 VERDADEIRO = SEMPRE VERDADE)
    true  || true  = true    --->   pode e pode ou sim sim --- Liberado
    true  || false = true    --->   pode um lado Sim o outro não --- Liberado (um lado verdadeiro)
    false || false = false   --->   Não e Não ou Não pode e Não pode

*/
console.log(true || true) // pode e pode ou sim sim --- Liberado
console.log(true || false) // pode um lado Sim o outro não --- Liberado (um lado verdadeiro)
console.log(false || false) // Não e Não ou Não pode e Não pode

/*    
----------------------------------------------------------------------------------------
!    ---> Negação Filho do Contra Rebelde (Operador de Negação)
           = NEGAÇÃO    ----> (COM O SINAL DE ! O RESULTADO SERA INVERSO.)
    !true  = false   --->   Sim mais não quero = falso
    !false = true    --->   Não mais eu vou = Verdadeiro

    */
console.log(!true) // Sim mais não quero = falso
console.log(!false) // Não mais eu vou = Verdadeiro

/*    
----------------------------------------------------------------------------------------
    */


