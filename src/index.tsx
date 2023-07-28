import {
  requireNativeComponent,
  UIManager,
  Platform,
  type ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package 'test-create-react-native-library' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

type TestCreateReactNativeLibraryProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'TestCreateReactNativeLibraryView';

export const TestCreateReactNativeLibraryView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<TestCreateReactNativeLibraryProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
