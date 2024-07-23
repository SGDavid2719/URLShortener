# Use an official Maven base image to build the project
FROM maven:3.6.3-jdk-17 AS build

# Set the working directory
WORKDIR /app

# Copy application code
COPY src ./src
COPY pom.xml .
RUN mvn clean package -DskipTests

# Use an official OpenJDK runtime as a parent image
FROM openjdk:17-jdk-slim

# Copy the project’s jar file into the container at /app
COPY target/portfolio-0.0.1-SNAPSHOT.jar ./urlshortener.jar

# Make port 8080 available to the world outside this container
EXPOSE 8080

# Run the jar file
ENTRYPOINT ["java", "-jar", "urlshortener.jar"]