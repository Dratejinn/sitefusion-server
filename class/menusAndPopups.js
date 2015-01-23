SiteFusion.Classes.MenuBar = function() {
    SiteFusion.Classes.Node.apply(this, arguments);

    this.sfClassName = 'XULMenuBar';

    this.initialize.apply(this, arguments);
};
SiteFusion.Classes.MenuBar.prototype = Object.create(SiteFusion.Classes.Node.prototype);
SiteFusion.Classes.MenuBar.prototype.constructor = SiteFusion.Classes.MenuBar;
    
    SiteFusion.Classes.MenuBar.prototype.initialize = function( win ) {
        this.element = win.systemMenuBar ? win.systemMenuBar : win.createElement( 'menubar' );
        
        this.element.sfNode = this;
        
        this.setEventHost();
    };


SiteFusion.Classes.MenuPopup = function() {
    SiteFusion.Classes.Node.apply(this, arguments);

    this.sfClassName = 'XULMenuPopup';

    this.initialize.apply(this, arguments);
};
SiteFusion.Classes.MenuPopup.prototype = Object.create(SiteFusion.Classes.Node.prototype);
SiteFusion.Classes.MenuPopup.prototype.constructor = SiteFusion.Classes.MenuPopup;
    
    SiteFusion.Classes.MenuPopup.prototype.initialize = function( win, isMenubarPopup, parentMenu ) {
        if( win.systemMenuBar && isMenubarPopup ) {
            this.element = parentMenu.childNodes[0];
        }
        else {
            this.element = win.createElement( 'menupopup' );
            this.element.setAttribute( 'type', 'created' );
        }
        
        this.element.sfNode = this;
        
        this.setEventHost();
    };


SiteFusion.Classes.MenuSeparator = function() {
    SiteFusion.Classes.Node.apply(this, arguments);

    this.sfClassName = 'XULMenuSeparator';

    this.initialize.apply(this, arguments);
};
SiteFusion.Classes.MenuSeparator.prototype = Object.create(SiteFusion.Classes.Node.prototype);
SiteFusion.Classes.MenuSeparator.prototype.constructor = SiteFusion.Classes.MenuSeparator;
    
    SiteFusion.Classes.MenuSeparator.prototype.initialize = function( win ) {
        this.element = win.createElement( 'menuseparator' );
        this.element.sfNode = this;
        
        this.setEventHost();
    };


SiteFusion.Classes.Menu = function() {
    SiteFusion.Classes.Node.apply(this, arguments);

    this.sfClassName = 'XULMenu';

    this.initialize.apply(this, arguments);
};
SiteFusion.Classes.Menu.prototype = Object.create(SiteFusion.Classes.Node.prototype);
SiteFusion.Classes.Menu.prototype.constructor = SiteFusion.Classes.Menu;
    
    SiteFusion.Classes.Menu.prototype.initialize = function( win, isRootMenu ) {
        if( win.systemMenuBar && isRootMenu ) {
            var menus = win.systemMenuBar.getElementsByTagName('menu');
            for( var n = 0; n < menus.length; n++ ) {
                if( menus[n].sfNode )
                    continue;
                
                this.element = menus[n];
                this.hidden(false);
                break;
            }
        } else
            this.element = win.createElement( 'menu' );
        
        this.element.sfNode = this;
        
        this.setEventHost();
    };


SiteFusion.Classes.MenuItem = function() {
    SiteFusion.Classes.Node.apply(this, arguments);

    this.sfClassName = 'XULMenuItem';

    this.initialize.apply(this, arguments);
};
SiteFusion.Classes.MenuItem.prototype = Object.create(SiteFusion.Classes.Node.prototype);
SiteFusion.Classes.MenuItem.prototype.constructor = SiteFusion.Classes.MenuItem;
    
    SiteFusion.Classes.MenuItem.prototype.initialize = function( win ) {
        this.element = win.createElement( 'menuitem' );
        this.element.sfNode = this;
        this.setEventHost([ 'yield' ]);
    };
    
    SiteFusion.Classes.MenuItem.prototype.yield = function() {
        var type = this.element.getAttribute('type');
        if(type == 'checkbox' || type == 'radio')
        {
            var checked = this.element.hasAttribute('checked');
            this.fireEvent( 'yield', [ checked ] );
        }
    };

SiteFusion.Classes.PopupSet = function() {
    SiteFusion.Classes.Node.apply(this, arguments);

    this.sfClassName = 'XULPopupSet';

    this.initialize.apply(this, arguments);
};
SiteFusion.Classes.PopupSet.prototype = Object.create(SiteFusion.Classes.Node.prototype);
SiteFusion.Classes.PopupSet.prototype.constructor = SiteFusion.Classes.PopupSet;
    
    SiteFusion.Classes.PopupSet.prototype.initialize = function( win ) {
        this.element = win.createElement( 'popupset' );
        this.element.sfNode = this;
        
        this.setEventHost();
    };


SiteFusion.Classes.Popup = function() {
    SiteFusion.Classes.Node.apply(this, arguments);

    this.sfClassName = 'XULPopup';

    this.initialize.apply(this, arguments);
};
SiteFusion.Classes.Popup.prototype = Object.create(SiteFusion.Classes.Node.prototype);
SiteFusion.Classes.Popup.prototype.constructor = SiteFusion.Classes.Popup;
    
    SiteFusion.Classes.Popup.prototype.initialize = function( win ) {
        this.element = win.createElement( 'menupopup' );
        this.element.setAttribute( 'type', 'created' );
        this.element.sfNode = this;
        
        this.setEventHost();
    };


SiteFusion.Classes.ToolTip = function() {
    SiteFusion.Classes.Node.apply(this, arguments);

    this.sfClassName = 'XULToolTip';

    this.initialize.apply(this, arguments);
};
SiteFusion.Classes.ToolTip.prototype = Object.create(SiteFusion.Classes.Node.prototype);
SiteFusion.Classes.ToolTip.prototype.constructor = SiteFusion.Classes.ToolTip;
    
    SiteFusion.Classes.ToolTip.prototype.initialize = function( win ) {
        this.element = win.createElement( 'tooltip' );
        this.element.setAttribute( 'type', 'created' );
        this.element.sfNode = this;
        
        this.setEventHost();
    };


SiteFusion.Classes.Panel = function() {
    SiteFusion.Classes.Node.apply(this, arguments);

    this.sfClassName = 'XULPanel';

    this.initialize.apply(this, arguments);
};
SiteFusion.Classes.Panel.prototype = Object.create(SiteFusion.Classes.Node.prototype);
SiteFusion.Classes.Panel.prototype.constructor = SiteFusion.Classes.Panel;
    
    SiteFusion.Classes.Panel.prototype.initialize = function( win ) {
        this.element = win.createElement( 'panel' );
        this.element.setAttribute( 'type', 'created' );
        this.element.sfNode = this;
        
        this.setEventHost();
    };
