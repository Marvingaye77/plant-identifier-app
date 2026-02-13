import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getAllRecipes, getRecipesByCategory, WellnessRecipe } from '../services/recipesService';

const CATEGORIES = [
  { id: 'cold', label: 'Cold', icon: 'cloud' },
  { id: 'pain', label: 'Pain', icon: 'medkit' },
  { id: 'sleep', label: 'Sleep', icon: 'moon' },
  { id: 'digestion', label: 'Digestion', icon: 'nutrition' },
  { id: 'immunity', label: 'Immunity', icon: 'shield-checkmark' },
  { id: 'energy', label: 'Energy', icon: 'flash' },
  { id: 'stress', label: 'Stress', icon: 'heart' },
];

export default function RecipesScreen() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedRecipeId, setExpandedRecipeId] = useState<string | null>(null);

  const getRecipes = (): WellnessRecipe[] => {
    let recipes = selectedCategory
      ? getRecipesByCategory(selectedCategory as any)
      : getAllRecipes();

    if (searchQuery) {
      recipes = recipes.filter(
        recipe =>
          recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          recipe.benefits.some(benefit =>
            benefit.toLowerCase().includes(searchQuery.toLowerCase())
          )
      );
    }

    return recipes;
  };

  const recipes = getRecipes();

  const RecipeCard = ({ recipe }: { recipe: WellnessRecipe }) => {
    const isExpanded = expandedRecipeId === recipe.id;

    return (
      <TouchableOpacity
        style={styles.recipeCard}
        onPress={() =>
          setExpandedRecipeId(isExpanded ? null : recipe.id)
        }
      >
        <View style={styles.recipeHeader}>
          <View style={styles.recipeTitle}>
            <Text style={styles.recipeIcon}>{recipe.icon}</Text>
            <View style={styles.recipeTitleText}>
              <Text style={styles.recipeName}>{recipe.name}</Text>
              <View style={styles.recipeMetadata}>
                <Text style={styles.prepTime}>⏱ {recipe.prepTime}m</Text>
                <Text style={styles.difficulty}>
                  {recipe.difficulty === 'easy'
                    ? '🟢 Easy'
                    : recipe.difficulty === 'medium'
                    ? '🟡 Medium'
                    : '🔴 Hard'}
                </Text>
              </View>
            </View>
          </View>
          <Ionicons
            name={isExpanded ? 'chevron-up' : 'chevron-down'}
            size={24}
            color="#6b7280"
          />
        </View>

        {isExpanded && (
          <View style={styles.recipeDetails}>
            {/* Benefits */}
            <View style={styles.detailSection}>
              <Text style={styles.detailTitle}>Benefits</Text>
              {recipe.benefits.map((benefit, idx) => (
                <Text key={idx} style={styles.benefitItem}>
                  ✓ {benefit}
                </Text>
              ))}
            </View>

            {/* Ingredients */}
            <View style={styles.detailSection}>
              <Text style={styles.detailTitle}>Ingredients</Text>
              {recipe.ingredients.map((ingredient, idx) => (
                <Text key={idx} style={styles.ingredientItem}>
                  • {ingredient.amount} {ingredient.unit} {ingredient.name}
                </Text>
              ))}
            </View>

            {/* Instructions */}
            <View style={styles.detailSection}>
              <Text style={styles.detailTitle}>Instructions</Text>
              {recipe.instructions.map((instruction, idx) => (
                <Text key={idx} style={styles.instructionItem}>
                  {idx + 1}. {instruction}
                </Text>
              ))}
            </View>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#9ca3af" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search recipes..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholderTextColor="#9ca3af"
        />
      </View>

      {/* Categories */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesContainer}
      >
        <TouchableOpacity
          style={[
            styles.categoryButton,
            selectedCategory === null && styles.categoryButtonActive,
          ]}
          onPress={() => setSelectedCategory(null)}
        >
          <Text
            style={[
              styles.categoryButtonText,
              selectedCategory === null && styles.categoryButtonTextActive,
            ]}
          >
            All
          </Text>
        </TouchableOpacity>

        {CATEGORIES.map(category => (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.categoryButton,
              selectedCategory === category.id && styles.categoryButtonActive,
            ]}
            onPress={() => setSelectedCategory(category.id)}
          >
            <Ionicons
              name={category.icon as any}
              size={16}
              color={selectedCategory === category.id ? '#fff' : '#6b7280'}
            />
            <Text
              style={[
                styles.categoryButtonText,
                selectedCategory === category.id &&
                  styles.categoryButtonTextActive,
              ]}
            >
              {category.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Recipes List */}
      <FlatList
        data={recipes}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <RecipeCard recipe={item} />}
        contentContainerStyle={styles.recipesList}
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Ionicons name="leaf" size={48} color="#d1d5db" />
            <Text style={styles.emptyStateText}>No recipes found</Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 8,
    fontSize: 14,
    color: '#1f2937',
  },
  categoriesContainer: {
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 8,
    borderRadius: 20,
    backgroundColor: '#e5e7eb',
    gap: 6,
  },
  categoryButtonActive: {
    backgroundColor: '#1e40af',
  },
  categoryButtonText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#6b7280',
  },
  categoryButtonTextActive: {
    color: '#fff',
  },
  recipesList: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  recipeCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    overflow: 'hidden',
  },
  recipeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
  },
  recipeTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 12,
  },
  recipeIcon: {
    fontSize: 28,
  },
  recipeTitleText: {
    flex: 1,
  },
  recipeName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
  },
  recipeMetadata: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 4,
  },
  prepTime: {
    fontSize: 12,
    color: '#6b7280',
  },
  difficulty: {
    fontSize: 12,
    color: '#6b7280',
  },
  recipeDetails: {
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: '#f9fafb',
  },
  detailSection: {
    marginBottom: 16,
  },
  detailTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 8,
  },
  benefitItem: {
    fontSize: 13,
    color: '#4b5563',
    marginBottom: 6,
    lineHeight: 18,
  },
  ingredientItem: {
    fontSize: 13,
    color: '#4b5563',
    marginBottom: 6,
    lineHeight: 18,
  },
  instructionItem: {
    fontSize: 13,
    color: '#4b5563',
    marginBottom: 8,
    lineHeight: 20,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 48,
  },
  emptyStateText: {
    fontSize: 16,
    color: '#9ca3af',
    marginTop: 12,
  },
});
