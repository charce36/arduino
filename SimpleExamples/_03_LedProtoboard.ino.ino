void setup() {
  pinMode(4, OUTPUT);
  pinMode(5, OUTPUT);
}
void loop() {
  for(int i=0; i<10; i++)
  {
      digitalWrite(4, HIGH);
      digitalWrite(5, LOW);
      delay(i * 100);
  
      digitalWrite(4, LOW);
      digitalWrite(5, HIGH);
      delay(i * 10);
  }

  for(int i=0; i<25; i++)
  {
      digitalWrite(4, HIGH);
      digitalWrite(5, LOW);
      delay(100);
  
      digitalWrite(4, LOW);
      digitalWrite(5, HIGH);
      delay(100);
  }
      digitalWrite(4, HIGH);
      digitalWrite(5, HIGH);
      delay(3000);
      digitalWrite(4, LOW);
      digitalWrite(5, LOW);
}
