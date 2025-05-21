from django import template

register = template.Library()

@register.filter(name='add_class')
def add_class(field, css_class):
    """
    Add a CSS class to a Django form field.
    
    Usage:
        {{ form.field|add_class:"form-control" }}
    """
    return field.as_widget(attrs={
        "class": f"{field.field.widget.attrs.get('class', '')} {css_class}".strip()
    })

@register.filter(name='attr')
def set_attribute(field, attr_string):
    """
    Add any attribute to a Django form field.
    Attribute and value should be separated by a colon (:)
    
    Usage:
        {{ form.field|attr:"style:color: red;" }}
    """
    if ':' not in attr_string:
        return field
        
    attr, value = attr_string.split(':', 1)
    attrs = {attr.strip(): value.strip()}
    
    return field.as_widget(attrs=attrs)