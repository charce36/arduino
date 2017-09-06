int led = 4;
int ledRojo = 5;
int ledVerde = 6;
int buttonpin = 7;

int val;

void setup() {
  pinMode(buttonpin, INPUT); //BUTTON
  pinMode(led, OUTPUT); //LUZ
  pinMode(ledRojo, OUTPUT);
  Serial.begin(9600); //COMUNIACION SERIAL
  
}

void loop() {
  int val = 0;
  val = digitalRead(buttonpin);
  
  Serial.println(val);
  if (val == 1)
  {
    digitalWrite(led,HIGH);
    delay(100);
    digitalWrite(ledRojo,HIGH);
    delay(100);
    digitalWrite(ledVerde,HIGH);    
  } else {
    digitalWrite(led,LOW);
    digitalWrite(ledRojo,LOW);
    digitalWrite(ledVerde ,LOW);
  }

  delay(100);
}
