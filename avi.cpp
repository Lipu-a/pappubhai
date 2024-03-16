#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

// Define a struct to represent a road segment
struct Road {
  int source;
  int destination;
  int weight; // Travel time or distance
};

// Function to represent the traffic network as a graph
vector<Road> createTrafficNetwork(int numJunctions, int numRoads) {
  vector<Road> roads;
  // Read data for each road (source, destination, weight) and add it to roads vector
  for (int i = 0; i < numRoads; ++i) {
    int source, destination, weight;
    // Read road data (replace with your data input method)
    cin >> source >> destination >> weight;
    roads.push_back({source, destination, weight});
  }
  return roads;
}

// Function to implement a chosen optimization algorithm (e.g., Dijkstra's)
vector<int> findOptimalPath(vector<Road> roads, int source, int destination) {
  // Implement your chosen pathfinding algorithm here
  // This example uses a placeholder function, replace with actual algorithm
  return {source, destination}; // Placeholder path
}

int main() {
  int numJunctions, numRoads;

  // Get number of junctions and roads
  cin >> numJunctions >> numRoads;

  // Create the traffic network graph
  vector<Road> trafficNetwork = createTrafficNetwork(numJunctions, numRoads);

  // Define source and destination junctions
  int source, destination;
  cin >> source >> destination;

  // Find the optimal path
  vector<int> optimalPath = findOptimalPath(trafficNetwork, source, destination);

  // Print the optimal path (junctions in the order they should be traversed)
  for (int junction : optimalPath) {
    cout << junction << " ";
  }
  cout << endl;

  return 0;
}