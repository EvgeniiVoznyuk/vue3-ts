import { shallowMount } from '@vue/test-utils'
import ItemComponent from '@/components/items/children/Item.vue'
import { itemInterface } from '@/models/items/Item.interface'

describe('Item.component.vue', () => {
  it('renders an Item correctly', () => {
    const model: itemInterface = {
      id: 1,
      name: 'Unit test item 1',
      selected: false,
    }

    const wrapper = shallowMount(ItemComponent, {
      props: {
        model: model,
      }
    })

    let domEl = wrapper.find('div.name')

    expect(domEl.text()).toEqual('Unit test item 1')
  })

  it('has expected css class when selected is false', () => {
    const model: itemInterface = {
      id: 2,
      name: 'Unit test item 2',
      selected: false,
    }

    const wrapper = shallowMount(ItemComponent, {
      props: {
        model: model,
      }
    })

    const classes = wrapper.classes()
    expect(classes).toContain('item')
    expect(classes).not.toContain('selected')
  })

  it('has selected css class when selected is true', () => {
    const model: itemInterface = {
      id: 2,
      name: 'Unit test item 2',
      selected: true,
    }

    const wrapper = shallowMount(ItemComponent, {
      props: {
        model: model,
      }
    })

    const classes = wrapper.classes()
    expect(classes).toContain('item')
    expect(classes).toContain('selected')
  })
})