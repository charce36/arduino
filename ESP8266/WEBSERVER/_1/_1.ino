#include <ESP8266WiFi.h>
#include <FirebaseArduino.h>

const char* ssid = "Fibertel WiFi976 2.4GHz";
const char* password = "0043499762";

//const char* ssid = "DiegoL";
//const char* password = "diego0610";

// Set these to run example.
#define FIREBASE_HOST "tfi-domoticarg.firebaseio.com"
#define FIREBASE_AUTH "Q5lzKMvIgkLB9zOLRJlvD69yjhHKbQcI9KQB42S2"
#define WIFI_SSID "Fibertel WiFi976 2.4GHz"
#define WIFI_PASSWORD "0043499762"


int ledPin = 13; // GPIO13
WiFiServer server(80);
 
void setup() {
  Serial.begin(115200);
  delay(10);
 
  pinMode(ledPin, OUTPUT);
  digitalWrite(ledPin, LOW);
 
  // Connect to WiFi network
  Serial.println();
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);
 
  WiFi.begin(ssid, password);
 
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi connected");
 
  // Start the server
  server.begin();
  Serial.println("Server started");
 
  // Print the IP address
  Serial.print("Use this URL to connect: ");
  Serial.print("http://");
  Serial.print(WiFi.localIP());
  Serial.println("/");

  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  Firebase.set("luzPin", 0);
  Serial.println("Firebase OK");
}

int fbLedValue = 0;
void loop() {
  int val = Firebase.getInt("luzPin");
  Serial.println(val);

  if(val == 0)
  {
    digitalWrite(ledPin, LOW);
  }
  else
  {
    digitalWrite(ledPin, HIGH);
  }
  
  delay(1000);
}
 
