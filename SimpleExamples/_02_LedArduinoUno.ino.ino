void setup() {
  pinMode(13, OUTPUT); //CONFIGURO PIN 13 COMO SALIDA
/*Prendido 3 segundos, apagado 2 segundos,

prendido 2 segundos, apagado 1 segundo, prendido 1 segundo y

apagado 0.5 segundos y que luego vuelva a arrancar.*/
}

void loop() {
  digitalWrite(13, HIGH); //Prendido
  delay(1000); // esperar por 3 seg
  
  digitalWrite(13, LOW); //lo apago
   delay(2000); // esperar por 2 seg
   
  digitalWrite(13, HIGH); //lo vuelvo a prender
  delay(2000); // esperar por 2 seg
  
  digitalWrite(13, LOW); //lo apago
  delay(1000);

  digitalWrite(13, HIGH); //lo apago
  delay(1000);

  digitalWrite(13, LOW); //lo apago
  delay(500);
}

