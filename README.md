the debugged listcomponent is in src->Components->DebuggedList.jsx. The other ListCom.jsx is the problem component.

DESCRIPTION : 
The List component takes memo(memoization) of WrappedListComponent which basically takes an array of objects (items) and for each item (with a required prop text of type string), renders another singleList component(which is again memo of WrappeSingleListItem) which
again takes some props like isSelected(boolean) which decides the background colour of the list item + a function onClickhandler for changing the isSelected field.
  The List component maps through the array items for rendering SinglelistItem.
  
  ERRORS IN THE CODE :
  1.ShapeOf is not a function
  FIX
  =>The error is due to the proptype declaration for wrappelistcomponent 'items'  PropTypes.array(PropTypes.shapeOf(). it should be PropTypes.arrayOf(PropType.shape()
  
  2.Sent null as default to wrappedListComponent. Cannot read properties of null.
  FIX
  =>Made a dummy array of objects "items". Coz sending null as props isn't a great idea.
  
  3.setSelectedindex is not a function.
  FIX
  => Due to switching variable and function name in the destructuring of  useState. it should be const[selectedIndex,setSelectedIndex] which was the opposite initially.
  
  4.  warning "No key prop for list...."
  FIX
  =>while sending the array "item" a key field should be there . This makes further operations like sorting and management easier. 
  
  5.BAD SETSTATE CALL. Cannot update a function while rendering another.
  => This warning is basically due to trying to change the state using handleCLick function which is called immediately using (). Should be sent as a prop only.
  Moreover instead of trying to pass index to isSelected for toggling the selected field,A better approach might be giving control to the list item itself for this based on certain props from parent.
  
  6. Sent number instead of boolean to the isSelected prop. sent index to it.
  =>The Proptype of sisSelected is boolean and "index" is sent inside this field which violates the proptype behaviour.Used another usestate hook with boolean . Which on click, toggles the isSelected field of each item and hence ,toggling the bg colour between green and red.
  
  
