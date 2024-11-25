import React, {useRef, useState} from 'react';
import {Alert, Platform} from 'react-native';

import {DocumentView, Config} from 'react-native-pdftron';

// These are some example data value to try presetting the checkboxes with
const presetFormData = {
  // check: 'No',
  // check: 'Yes',
  // check: true,
  // check: false,

  // anotherCheck: 'hello',
  // anotherCheck: 'goodbye',
  // anotherCheck: true,
  // anotherCheck: false,

  // yescheckbox: true,
  // yescheckbox: false,

  // randomcheckbox: true,
  // randomcheckbox: 'Random',
};
const App = () => {
  const documentViewRef = useRef(null);
  const isPopulatingRef = useRef(false);
  const [formData, setFormData] = useState(presetFormData);

  const onDocumentLoaded = async _path => {
    const documentView = documentViewRef.current;
    if (!documentView) {
      return;
    }

    isPopulatingRef.current = true;

    if (formData) {
      await documentView.setValuesForFields(formData);
    }

    isPopulatingRef.current = false;
  };

  const onFormFieldValueChanged = ({fields}) => {
    const newFields = {};
    fields.forEach(field => {
      newFields[field.fieldName] = field.fieldValue;
    });
    setFormData(prev => {
      return {
        ...prev,
        ...newFields,
      };
    });
  };

  return (
    <DocumentView
      ref={documentViewRef}
      hideAnnotationToolbarSwitcher={false}
      hideTopToolbars={false}
      hideTopAppNavBar={false}
      document={
        'https://storage.googleapis.com/test-public-form-templates/mutually-exclusive-checkboxes.pdf'
      }
      padStatusBar={true}
      showLeadingNavButton={true}
      leadingNavButtonIcon={
        Platform.OS === 'ios'
          ? 'ic_close_black_24px.png'
          : 'ic_arrow_back_white_24dp'
      }
      onFormFieldValueChanged={onFormFieldValueChanged}
      onDocumentLoaded={onDocumentLoaded}
      readOnly={false}
      disabledElements={[Config.Buttons.userBookmarkListButton]}
      disabledTools={[
        Config.Tools.annotationCreateLine,
        Config.Tools.annotationCreateRectangle,
      ]}
      fitMode={Config.FitMode.FitPage}
      layoutMode={Config.LayoutMode.Continuous}
      openOutlineList={true}
      annotationToolbars={[]}
      topAppNavBarRightBar={[Config.Buttons.shareButton]}
      longPressMenuEnabled={false}
      longPressMenuItems={[]}
      hideBottomToolbar={true}
      bottomToolbar={[]}
      overrideToolbarButtonBehavior={[Config.Buttons.shareButton]}
      onToolbarButtonPress={({id}) => {
        if (id === Config.Buttons.shareButton) {
          Alert.alert(
            'Data',
            JSON.stringify(formData)
              .replaceAll(',', '\n')
              .replaceAll('{', '\n')
              .replaceAll('}', '\n'),
          );
        }
      }}
    />
  );
};

export default App;
