int relay01 = 8;
int led = 6;

void setup() {
  pinMode(relay01, OUTPUT);
  pinMode(led, OUTPUT);
}

void loop() {
  digitalWrite(relay01, HIGH);
  digitalWrite(led, HIGH);
  delay(4000);
  digitalWrite(relay01, LOW);
  digitalWrite(led, LOW);
  delay(4000);
}
