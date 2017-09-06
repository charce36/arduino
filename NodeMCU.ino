#include <ESP8266WiFi.h>
 
const char* ssid = "wifi name";
const char* password = "wifi password";
; // 
WiFiServer server(80);
 
void setup() {
  Serial.begin(115200);
  delay(10);
  pinMode(13, OUTPUT);
  pinMode(5, OUTPUT);
  digitalWrite(13, HIGH);
  digitalWrite(5, HIGH);
 
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
}
 
void loop() {
  // Check if a client has connected
  WiFiClient client = server.available();
  if (!client) {
    return;
  }
 
  // Wait until the client sends some data
  Serial.println("new client");
  while(!client.available()){
    delay(1);
  }
 
  // Read the first line of the request
  String request = client.readStringUntil('\r');
  Serial.println(request);
  client.flush();
 
  // Match the request
 
 
  if (request.indexOf("/light1on") > 0)  {
    digitalWrite(13, LOW);
  }
  if (request.indexOf("/light1off") >0)  {
    digitalWrite(13, HIGH);
  }
  if (request.indexOf("/light2on") > 0)  {
    digitalWrite(5, LOW);
  }
  if (request.indexOf("/light2off") >0)  {
    digitalWrite(5, HIGH); 
  }

  // Return the response
  client.println("HTTP/1.1 200 OK");
  client.println("Content-Type: application;json");
  client.println(""); //  do not forget this one
  client.print("[{\"id\":1,\"enabled\":");
 
  if (digitalRead(13))
  { 
     client.print("false");        
  }
  else
  {
     client.print("true");
  }
  client.print("},{\"id\":2,\"enabled\":");
           
  if (digitalRead(5))
  { 
     client.print("false");
  }
  else
  {
     client.print("true");
  }
  client.println("}]");

  delay(1);
  Serial.println("Client disonnected");
  Serial.println(""); 
}
