void setup() {
  for(int x=6; x <= 10;x++)
  {
    pinMode(x, OUTPUT);
  }
}

void loop() {
  int delay_led = 100;
  int delay_restart = 500;
  
 for(int x=6; x <= 10;x++)
  {
    digitalWrite(x, HIGH);
    delay(delay_led);
  }

  for(int x=10; x >= 6; x--)
  {
    digitalWrite(x, LOW);
    delay(delay_led);
  }

 // delay(delay_restart);
}
