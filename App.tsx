import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Modal from 'react-native-modal';
import { TabBar, TabView } from "react-native-tab-view";

const FirstRoute = props => (
    <View style={{ flex: 1, backgroundColor: '#ff4081' }}>
      <TouchableOpacity onPress={props.hide}>
        <Text style={{ color: 'white', fontSize: 30, marginTop: 50 }}>Hide modal</Text>
      </TouchableOpacity>
    </View>
);

const SecondRoute = props => (
    <View style={{ flex: 1, backgroundColor: '#673ab7' }}>
      <TouchableOpacity onPress={props.hide}>
        <Text style={{ color: 'white', fontSize: 30, marginTop: 50 }}>Hide modal</Text>
      </TouchableOpacity>
    </View>
);

const TabViewExample = () => {
  const [visible, setVisible] = useState(false);
  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'first':
        return <FirstRoute hide={() => setVisible(false)} />;
      case 'second':
        return <SecondRoute hide={() => setVisible(false)} />;
      default:
        return null;
    }
  };
  return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <TouchableOpacity onPress={() => setVisible(true)}>
          <Text style={{ marginTop: 100 }}>Show date</Text>
        </TouchableOpacity>
        <Modal isVisible={visible} useNativeDriver={true} propagateSwipe={true} useNativeDriverForBackdrop={true}
               hideModalContentWhileAnimating={true}>
          <TabView
              style={{ flex: 1, backgroundColor: 'white' }}
              navigationState={{
                index: 1,
                routes: [
                  { key: "first", title: "Year" },
                  { key: "second", title: "Month" },
                ],
              }}
              renderScene={renderScene}
              swipeEnabled={false}
              renderTabBar={props => <TabBar{...props} pressColor={'#E2E6EA'} />}
              initialLayout={{ width: 350 }}
          />
        </Modal>
      </View>
  );
};

export default TabViewExample;
