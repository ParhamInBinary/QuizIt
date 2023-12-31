import { Button, Flex, Heading } from '@chakra-ui/react';

import { OptionsData } from '.';
import { optionsStrings } from '../../assets/strings';
import { SceneCard } from '../../chakra/SceneCard';
import { SceneContainer } from '../../chakra/SceneContainer';
import { useAppContext } from '../../context/AppContext';
import { OptionType, Scene } from '../../utils/types';
import { Option } from './components';

export const OptionsScene = () => {
  const { setScene, handleGenerateQuiz } = useAppContext();
  const { btns } = optionsStrings;

  return (
    <>
      <SceneContainer variant="optionsScene">
        <Heading variant="optionsSceneTitle">Customize your quiz</Heading>
        <SceneCard variant="optionsCard">
          {OptionsData.options.map((option: OptionType, index: number) => (
            <Option key={index} title={option.title} alternatives={option.alternatives} />
          ))}
        </SceneCard>

        <Flex gap="1.5em" flexDirection={{ base: 'column-reverse', sm: 'row' }} width={{ base: '100%', sm: 'auto' }}>
          <Button variant="return" onClick={() => setScene(Scene.HOME)}>
            {btns.back}
          </Button>
          <Button variant="proceed" onClick={handleGenerateQuiz}>
            {btns.generate}
          </Button>
        </Flex>
      </SceneContainer>
    </>
  );
};
