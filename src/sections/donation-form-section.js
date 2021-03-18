import {
	Label,
	Input,
	Select,
	Textarea,
	Radio,
	Checkbox,
	Slider,
	Box,
	Flex,
	Button,
	Container,
} from 'theme-ui';
import BlockTitle from 'components/block-title';


const Form = () => {
	return (
		<Container>
       <BlockTitle
        title="Join us"
        text={
          'We collaborate with talent in local communitiies to educate and empower them to solve the challenges they face in a susttainable way'
        
        }
      />
			<Box as='form' onSubmit={(e) => e.preventDefault()}>
				<Label htmlFor='username'>Username</Label>
				<Input name='username' mb={3} />
				<Label htmlFor='password'>Password</Label>
				<Input type='password' name='password' mb={3} />
				<Box>
					<Label mb={3}>
						<Checkbox />
						Remember me
					</Label>
				</Box>
				<Label htmlFor='sound'>Sound</Label>
				<Select name='sound' mb={3}>
					<option>Beep</option>
					<option>Boop</option>
					<option>Blip</option>
				</Select>
				<Label htmlFor='comment'>Comment</Label>
				<Textarea name='comment' rows='6' mb={3} />
				<Flex mb={3}>
					<Label>
						<Radio name='letter' /> Alpha
					</Label>
					<Label>
						<Radio name='letter' /> Bravo
					</Label>
					<Label>
						<Radio name='letter' /> Charlie
					</Label>
				</Flex>
				<Label>Slider</Label>
				<Slider mb={3} />
				<Button>Submit</Button>
			</Box>
		</Container>
	);
};

export default Form;

const styles = {
  accordion: {
    container: {
      maxWidth: '900px',
    },
    blockTitle: {
      marginBottom: [25, null, null, 65],
      textAlign: 'center',
    },
  },
};