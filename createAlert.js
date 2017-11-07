function createAlert(title, html, type){
    Ext.create('widget.uxNotification', {
            title: title,
            html: '<span style="font-size:12pt;">' + html +'</span>',
            cls: 'ux-notification-light',
            position: 'tr',
            width: 250,
            iconCls: 'ux-notification-icon-' + type
    }).show();                    
};