int PINO_SENSOR_LDR = A0; 
float resistencia = 3000.0; // Resistor fixo (ohms)
float Vcc = 5.0; 
 
void setup() { 
  Serial.begin(9600); 
} 
 
void loop() { 
  int valorLuminosidade = analogRead(PINO_SENSOR_LDR); 
  float tensao = (valorLuminosidade * Vcc) / 1023.0; 
 
  float resistencia_ldr = resistencia * (Vcc / tensao - 1); 
  
  // Ajuste da equação empírica de lux
  float lux = 500 / pow((resistencia_ldr/1000), 1.4);
  
  float ppfd = lux * 0.015;

  int estadoLuminosidade = (ppfd < 6) ? 0 : 1;

  Serial.print(estadoLuminosidade);
  Serial.print(";");
  Serial.println(ppfd);
 
  delay(1000); 
}
