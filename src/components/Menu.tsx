import React from 'react';
import { MenuSection, MenuSubsection } from '../data/menuData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import MenuTabs from './MenuTabs';

const Menu: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-25 to-amber-25 relative menu-texture">
      {/* Sophisticated background texture */}
      <div className="absolute inset-0 opacity-[0.15]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.2'%3E%3Cpath d='M50 50c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10zm-20-20c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10zm0 40c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10z'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-16">
        {/* Restaurant Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-serif text-gray-900 mb-6 tracking-tight">
              MENIU
            </h1>
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-600 to-amber-600"></div>
              <div className="w-2 h-2 bg-amber-600 rounded-full mx-4"></div>
              <div className="w-16 h-px bg-gradient-to-l from-transparent via-amber-600 to-amber-600"></div>
            </div>
          </div>
        </div>

        {/* Menu Tabs */}
        <MenuTabs />

        {/* Footer */}
        <div className="text-center mt-24 pt-16 border-t border-amber-300/30">
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-600 italic font-serif text-xl md:text-2xl mb-4">
              Toate preparatele sunt proaspăt pregătite cu ingrediente de calitate superioară
            </p>
            <div className="flex items-center justify-center mb-4">
              <div className="w-8 h-px bg-amber-400"></div>
              <div className="w-1 h-1 bg-amber-400 rounded-full mx-3"></div>
              <div className="w-8 h-px bg-amber-400"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface MenuSectionComponentProps {
  section: MenuSection;
  index: number;
}

export const MenuSectionComponent: React.FC<MenuSectionComponentProps> = ({ section, index }) => {
  const isEvenSection = index % 2 === 0;
  const { elementRef, isVisible } = useScrollAnimation({ 
    threshold: 0.1,
    initiallyVisible: true // Make content visible immediately on tab switches
  });
  
  return (
    <section 
      ref={elementRef as React.RefObject<HTMLElement>}
      className={`mb-20 ${isEvenSection ? 'md:ml-8' : 'md:mr-8'} transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
      }`}
    >
      {/* Only show title and graphic for non-drinks and non-wines sections */}
      {section.title !== "DRINKS" && section.title !== "WINES" && (
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-serif tracking-wider">
            {section.title}
          </h2>
          <div className="flex items-center justify-center">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-500 to-amber-500"></div>
            <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mx-4"></div>
            <div className="w-12 h-px bg-gradient-to-l from-transparent via-amber-500 to-amber-500"></div>
          </div>
        </div>
      )}

      {/* Render subsections if they exist (for drinks) */}
      {section.subsections && section.subsections.length > 0 ? (
        <div className="space-y-16">
          {section.subsections.map((subsection, subsectionIndex) => (
            <MenuSubsectionComponent 
              key={subsectionIndex} 
              subsection={subsection} 
              subsectionIndex={subsectionIndex}
            />
          ))}
        </div>
      ) : (
        /* Render regular items if no subsections */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {section.items.map((item, itemIndex) => (
            <MenuItemComponent key={itemIndex} item={item} itemIndex={itemIndex} />
          ))}
        </div>
      )}
    </section>
  );
};

interface MenuSubsectionComponentProps {
  subsection: MenuSubsection;
  subsectionIndex: number;
}

const MenuSubsectionComponent: React.FC<MenuSubsectionComponentProps> = ({ subsection, subsectionIndex }) => {
  const { elementRef, isVisible } = useScrollAnimation({ 
    threshold: 0.1,
    initiallyVisible: true 
  });
  
  return (
    <div 
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={`mb-12 transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
      }`}
    >
      {/* Subsection Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-serif tracking-wider">
          {subsection.title}
        </h2>
        <div className="flex items-center justify-center">
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-500 to-amber-500"></div>
          <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mx-4"></div>
          <div className="w-12 h-px bg-gradient-to-l from-transparent via-amber-500 to-amber-500"></div>
        </div>
      </div>
      
      {/* Subsection Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {subsection.items.map((item, itemIndex) => (
          <MenuItemComponent key={itemIndex} item={item} itemIndex={itemIndex} />
        ))}
      </div>
    </div>
  );
};

interface MenuItemComponentProps {
  item: {
    name: string;
    description: string;
    weight: string;
    price: string;
    image?: string;
  };
  itemIndex: number;
}

const MenuItemComponent: React.FC<MenuItemComponentProps> = ({ item, itemIndex }) => {
  const { elementRef, isVisible, scrollDirection } = useScrollAnimation({ 
    threshold: 0.2,
    rootMargin: '0px 0px -5% 0px'
  });

  const getAnimationClasses = () => {
    if (!isVisible) {
      return scrollDirection === 'down' 
        ? 'opacity-0 transform translate-y-8 scale-95'
        : 'opacity-0 transform -translate-y-8 scale-95';
    }
    return 'opacity-100 transform translate-y-0 scale-100';
  };

  // Function to highlight "39,90 lei" in the weight text
  const renderWeightWithHighlight = () => {
    if (!item.weight) return null;
    
    // Check if "39,90 lei" exists in the weight text
    if (item.weight.includes("39,90 lei")) {
      // Split the text and highlight the price
      const parts = item.weight.split("39,90 lei");
      return (
        <p className="text-gray-500 text-sm mt-2">
          {parts.map((part, index) => (
            <React.Fragment key={index}>
              {part}
              {index < parts.length - 1 && (
                <span className="text-amber-700 font-bold font-body">39,90 lei</span>
              )}
            </React.Fragment>
          ))}
        </p>
      );
    }
    
    // Return normal weight text if no special price is found
    return (
      <p className="text-gray-500 text-sm mt-2">
        {item.weight}
      </p>
    );
  };

  return (
    <div 
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={`bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-500 ease-out menu-item-hover border border-amber-100/50 ${
        getAnimationClasses()
      } ${item.image ? 'flex flex-col' : ''}`}
      style={{ 
        transitionDelay: `${itemIndex * 50}ms`
      }}
    >
      {/* Image for pizza items */}
      {item.image && (
        <div className="mb-4 overflow-hidden rounded-lg relative h-64">
          <img 
            src={item.image} 
            alt={item.name}
            className="w-full h-full object-cover rounded-lg"
            loading="lazy"
          />
        </div>
      )}
      
      <div className="flex justify-between items-start">
        <div className="flex-1 pr-4">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 font-serif leading-tight mb-2">
            {item.name}
          </h3>
          {item.description && (
            <p className="text-gray-600 leading-relaxed italic font-body text-base md:text-lg">
              {item.description}
            </p>
          )}
          {renderWeightWithHighlight()}
        </div>
        <div className="text-right flex-shrink-0 min-w-fit">
          <span className="text-amber-700 font-bold text-xl md:text-2xl font-body">{item.price}</span>
        </div>
      </div>
    </div>
  );
};

export default Menu;
