void setup() {
  pinMode(13, OUTPUT); //CONFIGURO PIN 13 COMO SALIDA

}

void loop() {
  digitalWrite(13, HIGH); //voy a prender
  delay(100); // esperar por 1 seg
  digitalWrite(13, LOW); //lo apago
   delay(100); // esperar por 1 seg
  digitalWrite(13, HIGH); //voy a prender
   delay(100); // esperar por 1 seg
  digitalWrite(13, LOW); //lo apago
  delay(1000);
}
