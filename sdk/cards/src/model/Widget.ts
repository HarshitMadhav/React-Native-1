import Action from "./action/Action";
import WidgetType from "./enums/WidgetType";
import WidgetStyle from "./styles/WidgetStyle";

/**
 * UI element in a card.
 * 
 * @author Abhishek Kumar
 * @since 1.0.0
 */
class Widget {

    /**
     * Identifier for the widget.
     * @since 1.0.0
     */
    id: number;

    /**
     * Type of widget
     * @since 1.0.0
     */
    widgetType: WidgetType;

    /**
     * Content to be loaded in the widget.
     * @since 1.0.0
     */
    content: string;

    /**
     * Style associated with the widget
     * @since 1.0.0
     */
    style: WidgetStyle | undefined;

    /**
     * Actions to be performed on widget click
     * @since 1.0.0
     */
    actionList: Array<Action>;

    constructor(
        id: number,
        widgetType: WidgetType,
        content: string,
        style: WidgetStyle | undefined,
        actionList: Array<Action>
    ) {
        this.id = id;
        this.widgetType = widgetType;
        this.content = content;
        this.style = style;
        this.actionList = actionList;
    }
}


export default Widget;