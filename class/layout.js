SiteFusion.Classes.Box = function() {
    SiteFusion.Classes.Node.call(this);

    this.sfClassName = 'XULBox';

    this.initialize.apply(this, arguments);
};
SiteFusion.Classes.Box.prototype = Object.create(SiteFusion.Classes.Node.prototype);
SiteFusion.Classes.Box.prototype.constructor = SiteFusion.Classes.Box;
    
    SiteFusion.Classes.Box.prototype.initialize = function( win ) {
        this.element = win.createElement( 'box' );
        this.element.sfNode = this;
    
        this.setEventHost();
    };


SiteFusion.Classes.HBox = function() {
    SiteFusion.Classes.Node.call(this);

    this.sfClassName = 'XULHBox';

    this.initialize.apply(this, arguments);
};
SiteFusion.Classes.HBox.prototype = Object.create(SiteFusion.Classes.Node.prototype);
SiteFusion.Classes.HBox.prototype.constructor = SiteFusion.Classes.HBox;
    
    SiteFusion.Classes.HBox.prototype.initialize = function( win ) {
        this.element = win.createElement( 'hbox' );
        this.element.sfNode = this;
        
        this.setEventHost();
    };


SiteFusion.Classes.VBox = function() {
    SiteFusion.Classes.Node.call(this);

    this.sfClassName = 'XULVBox';

    this.initialize.apply(this, arguments);
};
SiteFusion.Classes.VBox.prototype = Object.create(SiteFusion.Classes.Node.prototype);
SiteFusion.Classes.VBox.prototype.constructor = SiteFusion.Classes.VBox;
    
    SiteFusion.Classes.VBox.prototype.initialize = function( win ) {
        this.element = win.createElement( 'vbox' );
        this.element.sfNode = this;
        
        this.setEventHost();
    };


SiteFusion.Classes.BBox = function() {
    SiteFusion.Classes.Node.call(this);

    this.sfClassName = 'XULBBox';

    this.initialize.apply(this, arguments);
};
SiteFusion.Classes.BBox.prototype = Object.create(SiteFusion.Classes.Node.prototype);
SiteFusion.Classes.BBox.prototype.constructor = SiteFusion.Classes.BBox;
    
    SiteFusion.Classes.BBox.prototype.initialize = function( win ) {
        this.element = win.createElement( 'bbox' );
        this.element.sfNode = this;
        
        this.setEventHost();
    };


SiteFusion.Classes.ScrollBox = function() {
    SiteFusion.Classes.Node.call(this);

    this.sfClassName = 'XULScrollBox';

    this.initialize.apply(this, arguments);
};
SiteFusion.Classes.ScrollBox.prototype = Object.create(SiteFusion.Classes.Node.prototype);
SiteFusion.Classes.ScrollBox.prototype.constructor = SiteFusion.Classes.ScrollBox;
    
    SiteFusion.Classes.ScrollBox.prototype.initialize = function( win ) {
        this.element = win.createElement( 'scrollbox' );
        this.element.sfNode = this;
        
        this.setEventHost();
    };
    
    SiteFusion.Classes.ScrollBox.prototype.scrollTo = function( x, y ) {
        var oThis = this;
        
        SiteFusion.Interface.DeferredCallbacks.push( function() {
            var xpcomInterface = oThis.element.boxObject.QueryInterface(Ci.nsIScrollBoxObject);
            xpcomInterface.scrollTo( x, y );
        } );
    };
    
    SiteFusion.Classes.ScrollBox.prototype.ensureElementIsVisible = function( node ) {
        var oThis = this;
        
        SiteFusion.Interface.DeferredCallbacks.push( function() {
            var xpcomInterface = oThis.element.boxObject.QueryInterface(Ci.nsIScrollBoxObject);
            xpcomInterface.ensureElementIsVisible(node.element);
        } );
    };


SiteFusion.Classes.HTMLBox = function() {
    SiteFusion.Classes.Node.call(this);

    this.sfClassName = 'XULHTMLBox';

    this.initialize.apply(this, arguments);
};
SiteFusion.Classes.HTMLBox.prototype = Object.create(SiteFusion.Classes.Node.prototype);
SiteFusion.Classes.HTMLBox.prototype.constructor = SiteFusion.Classes.HTMLBox;
    
    SiteFusion.Classes.HTMLBox.prototype.initialize = function( win ) {
        this.element = win.createElement( 'browser' );
        this.element.sfNode = this;
        this.element.setAttribute('disablehistory', true);
        this.element.setAttribute( 'src', 'about:blank' );
        
        this.setEventHost();
    };
    
    SiteFusion.Classes.HTMLBox.prototype.setContent = function( html ) {
        if( ! this.element.contentDocument ) {
            var oThis = this;
            setTimeout( function() { oThis.setContent( html ); }, 10 );
            return;
        }
        
        this.element.contentDocument.open();
        this.element.contentDocument.write( html );
        this.element.contentDocument.close();
    };


SiteFusion.Classes.Stack = function() {
    SiteFusion.Classes.Node.call(this);

    this.sfClassName = 'XULStack';

    this.initialize.apply(this, arguments);
};
SiteFusion.Classes.Stack.prototype = Object.create(SiteFusion.Classes.Node.prototype);
SiteFusion.Classes.Stack.prototype.constructor = SiteFusion.Classes.Stack;
    
    SiteFusion.Classes.Stack.prototype.initialize = function( win ) {
        this.element = win.createElement( 'stack' );
        this.element.sfNode = this;
        
        this.setEventHost();
    };


SiteFusion.Classes.Deck = function() {
    SiteFusion.Classes.Node.call(this);

    this.sfClassName = 'XULDeck';

    this.initialize.apply(this, arguments);
};
SiteFusion.Classes.Deck.prototype = Object.create(SiteFusion.Classes.Node.prototype);
SiteFusion.Classes.Deck.prototype.constructor = SiteFusion.Classes.Deck;
    
    SiteFusion.Classes.Deck.prototype.initialize = function( win ) {
        this.element = win.createElement( 'deck' );
        this.element.sfNode = this;
        
        this.setEventHost();
    };
    
    SiteFusion.Classes.Deck.prototype.selectedPanel = function( panel ) {
        var oThis = this;
        SiteFusion.Interface.DeferredCallbacks.push( function() { oThis.element.selectedPanel = panel.element; } );
    };


SiteFusion.Classes.Grid = function() {
    SiteFusion.Classes.Node.call(this);

    this.sfClassName = 'XULGrid';

    this.initialize.apply(this, arguments);
};
SiteFusion.Classes.Grid.prototype = Object.create(SiteFusion.Classes.Node.prototype);
SiteFusion.Classes.Grid.prototype.constructor = SiteFusion.Classes.Grid;
    
    SiteFusion.Classes.Grid.prototype.initialize = function( win ) {
        this.element = win.createElement( 'grid' );
        this.element.sfNode = this;
        
        this.setEventHost();
    };


SiteFusion.Classes.Columns = function() {
    SiteFusion.Classes.Node.call(this);

    this.sfClassName = 'XULColumns';

    this.initialize.apply(this, arguments);
};
SiteFusion.Classes.Columns.prototype = Object.create(SiteFusion.Classes.Node.prototype);
SiteFusion.Classes.Columns.prototype.constructor = SiteFusion.Classes.Columns;
    
    SiteFusion.Classes.Columns.prototype.initialize = function( win ) {
        this.element = win.createElement( 'columns' );
        this.element.sfNode = this;
        
        this.setEventHost();
    };


SiteFusion.Classes.Rows = function() {
    SiteFusion.Classes.Node.call(this);

    this.sfClassName = 'XULRows';

    this.initialize.apply(this, arguments);
};
SiteFusion.Classes.Rows.prototype = Object.create(SiteFusion.Classes.Node.prototype);
SiteFusion.Classes.Rows.prototype.constructor = SiteFusion.Classes.Rows;
    
    SiteFusion.Classes.Rows.prototype.initialize = function( win ) {
        this.element = win.createElement( 'rows' );
        this.element.sfNode = this;
        
        this.setEventHost();
    };


SiteFusion.Classes.Column = function() {
    SiteFusion.Classes.Node.call(this);

    this.sfClassName = 'XULColumn';

    this.initialize.apply(this, arguments);
};
SiteFusion.Classes.Column.prototype = Object.create(SiteFusion.Classes.Node.prototype);
SiteFusion.Classes.Column.prototype.constructor = SiteFusion.Classes.Column;
    
    SiteFusion.Classes.Column.prototype.initialize = function( win ) {
        this.element = win.createElement( 'column' );
        this.element.sfNode = this;
        
        this.setEventHost();
    };


SiteFusion.Classes.Row = function() {
    SiteFusion.Classes.Node.call(this);

    this.sfClassName = 'XULRow';

    this.initialize.apply(this, arguments);
};
SiteFusion.Classes.Row.prototype = Object.create(SiteFusion.Classes.Node.prototype);
SiteFusion.Classes.Row.prototype.constructor = SiteFusion.Classes.Row;
    
    SiteFusion.Classes.Row.prototype.initialize = function( win ) {
        this.element = win.createElement( 'row' );
        this.element.sfNode = this;
        
        this.setEventHost();
    };
