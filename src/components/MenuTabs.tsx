import React, { useState } from 'react';
import { menuData, MenuSection } from '../data/menuData';
import { MenuSectionComponent } from './Menu';

const MenuTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('pizza');

  // Find the sections
  const foodCategories = ["STARTERE", "SALATE", "PASTE & RISOTTO", "GARNITURI", "PREPARATE DIN CARNE", "PESTE & FRUCTE DE MARE", "SOSURI", "EXTRA", "DESERT"];
  const foodSections = menuData.filter(section => foodCategories.includes(section.title));
  const drinksSection = menuData.find(section => section.title === "DRINKS");
  const winesSection = menuData.find(section => section.title === "WINES");
  const pizzaSection = menuData.find(section => section.title === "PIZZA");

  return (
    <div className="w-full">
      {/* Tab Headers */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 border-b border-amber-200/50 pb-2">
        <button
          className={`px-4 py-2 md:px-6 md:py-3 text-sm md:text-base font-medium rounded-t-lg transition-all duration-300 ${
            activeTab === 'pizza'
              ? 'bg-amber-600 text-white shadow-md'
              : 'bg-white/80 text-gray-700 hover:bg-amber-100/80'
          }`}
          onClick={() => setActiveTab('pizza')}
        >
          Pizza
        </button>
        <button
          className={`px-4 py-2 md:px-6 md:py-3 text-sm md:text-base font-medium rounded-t-lg transition-all duration-300 ${
            activeTab === 'food'
              ? 'bg-amber-600 text-white shadow-md'
              : 'bg-white/80 text-gray-700 hover:bg-amber-100/80'
          }`}
          onClick={() => setActiveTab('food')}
        >
          Food
        </button>
        <button
          className={`px-4 py-2 md:px-6 md:py-3 text-sm md:text-base font-medium rounded-t-lg transition-all duration-300 ${
            activeTab === 'drinks'
              ? 'bg-amber-600 text-white shadow-md'
              : 'bg-white/80 text-gray-700 hover:bg-amber-100/80'
          }`}
          onClick={() => setActiveTab('drinks')}
        >
          Drinks
        </button>
        <button
          className={`px-4 py-2 md:px-6 md:py-3 text-sm md:text-base font-medium rounded-t-lg transition-all duration-300 ${
            activeTab === 'wines'
              ? 'bg-amber-600 text-white shadow-md'
              : 'bg-white/80 text-gray-700 hover:bg-amber-100/80'
          }`}
          onClick={() => setActiveTab('wines')}
        >
          Wines
        </button>
      </div>

      {/* Tab Content */}
      <div className="space-y-16">
        {activeTab === 'food' && (
          // Show all sections as before for the Food tab
          <>
            {foodSections.map((section, index) => (
              <MenuSectionComponent key={index} section={section} index={index} />
            ))}
          </>
        )}
        
        {activeTab === 'drinks' && (
          // Show the drinks section or coming soon message
          drinksSection ? (
            <MenuSectionComponent section={drinksSection} index={0} key="drinks-section" />
          ) : (
            <div className="text-center py-12">
              <h3 className="text-2xl font-serif text-gray-700 mb-4">Coming Soon</h3>
              <p className="text-gray-600 font-body">This menu category is being prepared for you.</p>
            </div>
          )
        )}
        
        {activeTab === 'wines' && (
          // Show the wines section or coming soon message
          winesSection ? (
            <MenuSectionComponent section={winesSection} index={0} key="wines-section" />
          ) : (
            <div className="text-center py-12">
              <h3 className="text-2xl font-serif text-gray-700 mb-4">Coming Soon</h3>
              <p className="text-gray-600 font-body">This menu category is being prepared for you.</p>
            </div>
          )
        )}

        {activeTab === 'pizza' && (
          // Show the pizza section or coming soon message
          pizzaSection ? (
            <MenuSectionComponent section={pizzaSection} index={0} key="pizza-section" />
          ) : (
            <div className="text-center py-12">
              <h3 className="text-2xl font-serif text-gray-700 mb-4">Coming Soon</h3>
              <p className="text-gray-600 font-body">This menu category is being prepared for you.</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default MenuTabs;