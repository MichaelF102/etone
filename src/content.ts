export interface Topic {
  id: string;
  title: string;
  subtitle?: string;
  unit: number;
  content: string;
  infoBox?: {
    quote: string;
    author: string;
    text: string;
  };
  processDiagram?: {
    steps: { label: string; sublabel?: string }[];
  };
  paradigmShift?: {
    traditional: { input1: string; input2: string; process: string; output: string };
    machineLearning: { input1: string; input2: string; process: string; output: string };
  };
  components?: {
    title: string;
    items: { icon: string; title: string; description: string; example: { title: string; lines: string[] } }[];
  };
  mlTypes?: {
    title: string;
    items: { title: string; description: string; example: string; algorithms: string[]; color: string }[];
  };
  workflow?: {
    title: string;
    steps: { title: string; description: string }[];
  };
  comparison?: {
    title: string;
    headers: string[];
    rows: string[][];
  };
  quiz?: {
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
  };
  code?: string;
  visualizationType?: string;
}

export const CONTENT: Topic[] = [
  // UNIT 1
  {
    id: 'dm-intro',
    unit: 1,
    title: 'Data Mining',
    subtitle: 'The art and science of extracting knowledge from data.',
    content: '',
  },
  {
    id: 'kdd-process',
    unit: 1,
    title: 'KDD Process',
    subtitle: 'The complete process of extracting useful knowledge from raw data.',
    content: '',
  },
  {
    id: 'data-warehousing',
    unit: 1,
    title: 'Data Warehousing',
    subtitle: 'Centralized storage for business intelligence and decision-making.',
    content: '',
  },
  {
    id: 'star-vs-snowflake',
    unit: 1,
    title: 'Star vs Snowflake Schema',
    subtitle: 'Understanding the two primary data warehouse design architectures.',
    content: '',
  },
  {
    id: 'olap-cube',
    unit: 1,
    title: 'Multidimensional Analysis & OLAP Cubes',
    subtitle: 'Analyzing data from multiple perspectives for complex business insights.',
    content: '',
  },
  {
    id: 'etl-process',
    unit: 1,
    title: 'ETL (Extract, Transform, Load)',
    subtitle: 'The data integration lifecycle: From raw sources to actionable insights.',
    content: '',
  },

  // UNIT 2
  {
    id: 'classification',
    unit: 2,
    title: 'Classification',
    subtitle: 'Assigning data into predefined categories.',
    content: `
# Classification
Classification is a supervised learning technique where the goal is to predict the discrete category or label of a given input.

### Examples:
- **Email Spam Detection**: Categorizing emails as "Spam" or "Not Spam".
- **Image Recognition**: Identifying if an image contains a "Cat" or a "Dog".
- **Disease Diagnosis**: Predicting if a patient has a disease based on symptoms.

### Key Concepts:
- **Labels**: The predefined categories (e.g., Yes/No, A/B/C).
- **Training Data**: Labeled data used to teach the model.
- **Decision Boundary**: The line or surface that separates different classes.
    `,
    code: `from sklearn.tree import DecisionTreeClassifier
model = DecisionTreeClassifier()
model.fit(X_train, y_train)
predictions = model.predict(X_test)`,
    visualizationType: 'classification-viz'
  },
  {
    id: 'regression',
    unit: 2,
    title: 'Regression',
    subtitle: 'Predicting continuous numerical values.',
    content: `
# Regression
Regression is a supervised learning technique used to predict a continuous numerical value. Unlike classification, which predicts discrete labels, regression outputs a real number.

### Examples:
- **House Price Prediction**: Predicting the price of a house based on its size, location, and features.
- **Temperature Forecasting**: Predicting the temperature for the next day.
- **Stock Price Prediction**: Estimating the future value of a stock.

### Key Concepts:
- **Independent Variable (X)**: The input feature(s).
- **Dependent Variable (y)**: The value we want to predict.
- **Line of Best Fit**: The line that minimizes the error between predictions and actual values.
    `,
    code: `from sklearn.linear_model import LinearRegression
model = LinearRegression()
model.fit(X_train, y_train)
predictions = model.predict(X_test)`,
    visualizationType: 'regression-viz'
  },
  {
    id: 'ensemble-learning',
    unit: 2,
    title: 'Ensemble Learning',
    subtitle: 'Combining multiple models to produce a stronger, more accurate predictor.',
    content: '',
    code: `from sklearn.ensemble import RandomForestClassifier
# Create a Bagging ensemble
model = RandomForestClassifier(n_estimators=100)
model.fit(X_train, y_train)`,
    visualizationType: 'ensemble-viz'
  },
  {
    id: 'bagging-boosting',
    unit: 2,
    title: 'Bagging vs Boosting',
    subtitle: 'Understanding the two most powerful ensemble learning paradigms.',
    content: ''
  },
  {
    id: 'decision-trees',
    unit: 2,
    title: 'Decision Trees',
    subtitle: 'A flowchart-like structure for classification and regression.',
    content: '',
    code: `from sklearn.tree import DecisionTreeClassifier
tree = DecisionTreeClassifier(criterion='entropy')
tree.fit(X, y)`,
    visualizationType: 'decision-tree-viz'
  },
  {
    id: 'cross-validation',
    unit: 2,
    title: 'Cross Validation',
    subtitle: 'Evaluating model performance by splitting and testing data multiple times.',
    content: ''
  },
  {
    id: 'pca',
    unit: 2,
    title: 'PCA',
    subtitle: 'Principal Component Analysis: Reducing dimensions while preserving information.',
    content: '',
    visualizationType: 'pca-viz'
  },

  // UNIT 3
  {
    id: 'clustering',
    unit: 3,
    title: 'Clustering',
    subtitle: 'Grouping similar data points together without predefined labels.',
    content: '',
    visualizationType: 'clustering-viz'
  },
  {
    id: 'k-means',
    unit: 3,
    title: 'K-Means Clustering',
    subtitle: 'Partition data into K clusters based on similarity.',
    content: '',
    visualizationType: 'kmeans-viz'
  },
  {
    id: 'dbscan',
    unit: 3,
    title: 'DBSCAN',
    subtitle: 'Density-Based Spatial Clustering of Applications with Noise.',
    content: '',
    visualizationType: 'dbscan-viz'
  },
  {
    id: 'hierarchical-clustering',
    unit: 3,
    title: 'Hierarchical Clustering',
    subtitle: 'Build a tree-like hierarchy of clusters.',
    content: '',
    visualizationType: 'hierarchical-viz'
  },
  {
    id: 'association-rules',
    unit: 3,
    title: 'Association Rule Mining',
    subtitle: 'Discovering interesting relationships between variables.',
    content: `
# Association Rule Mining
Association rule mining is a rule-based machine learning method for discovering interesting relations between variables in large databases.

### Examples:
- **Market Basket Analysis**: If a customer buys bread and butter, they are likely to buy milk.
- **Web Usage Mining**: If a user visits page A, they are likely to visit page B.
- **Bioinformatics**: Finding relationships between genes.

### Key Metrics:
- **Support**: How frequently the itemset appears in the dataset.
- **Confidence**: How often the rule has been found to be true.
- **Lift**: The ratio of the observed support to that expected if X and Y were independent.
    `,
    visualizationType: 'association-viz'
  },
  {
    id: 'apriori',
    unit: 3,
    title: 'Apriori Algorithm',
    content: `
# Apriori Algorithm
Apriori is an algorithm for frequent itemset mining and association rule learning over relational databases.

### Key Metrics:
- **Support**: How frequently the itemset appears.
- **Confidence**: How often the rule has been found to be true.
- **Lift**: The ratio of the observed support to that expected if X and Y were independent.
    `,
    visualizationType: 'apriori-viz'
  },
  {
    id: 'fp-growth',
    unit: 3,
    title: 'FP-Growth Algorithm',
    subtitle: 'Frequent Pattern Growth: Mining without candidate generation.',
    content: '',
    visualizationType: 'fpgrowth-viz'
  },
  {
    id: 'decision-tree-numerical',
    unit: 4,
    title: 'Decision Tree Numerical',
    subtitle: 'Step-by-step calculation of Entropy and Information Gain.',
    content: '',
    visualizationType: 'decision-tree-viz'
  },
  {
    id: 'kmeans-numerical',
    unit: 4,
    title: 'K-Means Numerical',
    subtitle: 'Step-by-step calculation of K-Means iterations and Silhouette Coefficient.',
    content: '',
    visualizationType: 'kmeans-numerical-viz'
  },
  {
    id: 'hierarchical-numerical',
    unit: 4,
    title: 'Hierarchical Clustering Numerical',
    subtitle: 'Step-by-step calculation of Hierarchical Clustering using Single Link technique.',
    content: ''
  },
  {
    id: 'dbscan-numerical',
    unit: 4,
    title: 'DBSCAN Numerical',
    subtitle: 'Step-by-step calculation of DBSCAN clustering.',
    content: ''
  },
  {
    id: 'apriori-numerical',
    unit: 4,
    title: 'Apriori Algorithm Numerical',
    subtitle: 'Step-by-step calculation of frequent itemsets and association rules.',
    content: ''
  },
  {
    id: 'fpgrowth-numerical',
    unit: 4,
    title: 'FP-Growth Algorithm Numerical',
    subtitle: 'Step-by-step calculation of frequent patterns using FP-Tree.',
    content: ''
  }
];
