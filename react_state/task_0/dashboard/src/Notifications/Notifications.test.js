import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';

describe('Notifications', () => {

  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('menu item is displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} listNotifications={[]} />);
    expect(wrapper.find('[data-testid="menuItem"]').text()).toContain('Your notifications');
    expect(wrapper.find('[data-testid="notifications"]').exists()).toBe(false);
  });

  it('div.Notifications is not displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('[data-testid="notifications"]').exists()).toBe(false);
  });

  it('menu item is being displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    expect(wrapper.find('[data-testid="menuItem"]').text()).toContain('Your notifications');
    expect(wrapper.find('[data-testid="notifications"]').exists()).toBe(true);
  });

  describe('with a list of notifications and displayDrawer true', () => {
    const notifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } }
    ];

    it('renders the correct number of notifications', () => {
      const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={notifications} />);
      expect(wrapper.find(NotificationItem).length).toBe(notifications.length);
    });

    it('markAsRead logs to console when called', () => {
      const consoleSpy = jest.spyOn(console, 'log');
      const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[{id: 1, type: 'default', value: 'New course available'}]} />);
      const instance = wrapper.instance();
      instance.markAsRead(1);
      expect(consoleSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');
      consoleSpy.mockRestore();
    });

    describe('Component Update Behavior', () => {
      it('does not re-render when the listNotifications has the same length', () => {
        const notifications = [
          { id: 1, type: 'default', value: 'New course available' },
          { id: 2, type: 'urgent', value: 'New resume available' }
        ];

        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={notifications} />);
        const shouldUpdate = wrapper.instance().shouldComponentUpdate({ listNotifications: notifications });

        expect(shouldUpdate).toBe(false);
      });

      it('re-renders when the listNotifications length increases', () => {
        const initialNotifications = [
          { id: 1, type: 'default', value: 'New course available' }
        ];
        const newNotifications = [
          ...initialNotifications,
          { id: 2, type: 'urgent', value: 'New resume available' }
        ];

        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={initialNotifications} />);
        const shouldUpdate = wrapper.instance().shouldComponentUpdate({ listNotifications: newNotifications });

        expect(shouldUpdate).toBe(true);
      });
    });

    it('calls handleDisplayDrawer when menu item is clicked', () => {
      const handleDisplayDrawerMock = jest.fn();
      const wrapper = shallow(<Notifications displayDrawer={false} handleDisplayDrawer={handleDisplayDrawerMock} />);
      wrapper.find('[data-testid="menuItem"]').simulate('click');
      expect(handleDisplayDrawerMock).toHaveBeenCalled();
    });

    it('calls handleHideDrawer when close button is clicked', () => {
      const handleHideDrawerMock = jest.fn();
      const wrapper = shallow(<Notifications displayDrawer={true} handleHideDrawer={handleHideDrawerMock} />);
      wrapper.find('[data-testid="closeButton"]').simulate('click');
      expect(handleHideDrawerMock).toHaveBeenCalled();
    });

  });
});
